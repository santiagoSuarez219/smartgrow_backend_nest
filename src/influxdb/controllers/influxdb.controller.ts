import { Controller, Get } from '@nestjs/common';
import { InfluxdbService } from '../services/influxdb.service';

@Controller('influxdb')
export class InfluxdbController {
  constructor(private readonly influxdbService: InfluxdbService) {}

  @Get()
  testConnectionInflux() {
    return this.influxdbService.create_data_test();
  }

  @Get('query')
  testQueryInflux() {
    return this.influxdbService.query_test();
  }
}
