import { Inject, Injectable, Logger } from '@nestjs/common';
import { InfluxDB, QueryApi, Point, flux } from '@influxdata/influxdb-client';
import { ConfigType } from '@nestjs/config';

import config from '../../config';

@Injectable()
export class InfluxdbService {
  private logger = new Logger(InfluxdbService.name);
  private client: InfluxDB;
  private queryApi: QueryApi;
  private org: string;
  private bucket: string;

  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {
    this.connect();
  }

  private connect(): void {
    const host = this.configService.influxdb.host;
    const port = this.configService.influxdb.port;
    const token = this.configService.influxdb.token;
    this.bucket = this.configService.influxdb.bucket;
    this.org = this.configService.influxdb.org;
    const url = `http://${host}:${port}`;
    this.client = new InfluxDB({ url, token });
    this.queryApi = this.client.getQueryApi(this.org);
    this.logger.log('Conectado InfluxDB');
  }

  async create_data(collection: string, typedata: string, value: number) {
    const writeApi = this.client.getWriteApi(this.org, this.bucket);
    const point = new Point(collection)
      .tag('location', 'smargrow')
      .floatField(typedata, value)
      .timestamp(new Date());
    writeApi.writePoint(point);
    writeApi
      .close()
      .then(() => {
        console.log('FINISHED');
      })
      .catch((e) => {
        console.error(e);
        console.log('Finished ERROR');
      });
  }

  async getData(collection: string) {
    const query = flux`from(bucket: "${this.bucket}")
    |> range(start: -1d)
    |> filter(fn: (r) => r._measurement == "${collection}")`;
    this.queryApi.queryRows(query, {
      next(row, tableMeta) {
        const o = tableMeta.toObject(row);
        console.log(`${o._time} ${o._measurement}: ${o._field}=${o._value}`);
      },
      error(error) {
        console.error(error);
        console.log('Finished ERROR');
      },
      complete() {
        console.log('Finished SUCCESS');
      },
    });
  }
}
