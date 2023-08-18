import { Controller } from '@nestjs/common';
import { InfluxdbService } from '../services/influxdb.service';

@Controller('influxdb')
export class InfluxdbController {
  constructor(private readonly influxdbService: InfluxdbService) {}
}
