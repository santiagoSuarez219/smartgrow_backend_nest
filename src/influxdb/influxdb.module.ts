import { Global, Module } from '@nestjs/common';
import { InfluxdbService } from './services/influxdb.service';
import { InfluxdbController } from './controllers/influxdb.controller';

@Global()
@Module({
  providers: [InfluxdbService],
  controllers: [InfluxdbController],
  exports: [InfluxdbService],
})
export class InfluxdbModule {}
