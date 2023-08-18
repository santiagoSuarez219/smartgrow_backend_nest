import { Injectable, Logger } from '@nestjs/common';
import { InfluxDB, QueryApi, Point, flux } from '@influxdata/influxdb-client';

@Injectable()
export class InfluxdbService {
  private logger = new Logger(InfluxdbService.name);
  private readonly client: InfluxDB;
  private readonly queryApi: QueryApi;
  private readonly org: string = 'smartgrow';
  private readonly bucket: string = 'smartdata';

  constructor() {
    const url = 'http://localhost:8086';
    const token =
      '7efGIYBih-Y2yrDtPjJWrpqedaza-igF1v-AfTjGs91mgUaIfbJNI-RdpIHx5yrTI6VI8WKJEIPgDhfq50TvXQ==';

    this.client = new InfluxDB({ url, token });
    this.queryApi = this.client.getQueryApi(this.org);
    this.logger.log('Conectado InfluxDB');
  }

  async create_data_test() {
    const writeApi = this.client.getWriteApi(this.org, this.bucket);
    const point = new Point('weatherstation')
      .tag('location', 'San Francisco')
      .floatField('temperature', 23.4)
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

  async query_test() {
    const query = flux`from(bucket: "${this.bucket}")
    |> range(start: -1d)
    |> filter(fn: (r) => r._measurement == "weatherstation")`;
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
