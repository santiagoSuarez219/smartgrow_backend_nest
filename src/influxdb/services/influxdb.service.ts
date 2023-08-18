import { Inject, Injectable, Logger } from '@nestjs/common';
import { InfluxDB, QueryApi, Point, flux } from '@influxdata/influxdb-client';
import { ConfigType } from '@nestjs/config';
import { PointSCD40 } from '../influx.points';
import { queries } from '../influx.querys';

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

  async create_data(collection: string, data: any) {
    const writeApi = this.client.getWriteApi(this.org, this.bucket);
    let point: Point;
    if (collection === 'scd40') {
      point = PointSCD40(data.co2, data.temperatura, data.humedad);
    }
    writeApi.writePoint(point);
    writeApi
      .close()
      .then(() => {
        return this.logger.log('Dato creado con exito');
      })
      .catch((e) => {
        console.error(e);
        return this.logger.error('Error al crear dato');
      });
  }

  async getData(collection: string) {
    const query = flux`${queries.getSensorData(this.bucket, collection)}`;
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
