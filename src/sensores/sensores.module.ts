import { Module } from '@nestjs/common';
import { Scd40Controller } from './controllers/scd40.controller';
import { Scd40Service } from './services/scd40.service';
import { MongooseModule } from '@nestjs/mongoose';

import { Scd40, Scd40Schema } from './entities/scd40.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Scd40.name, schema: Scd40Schema }]),
  ],
  controllers: [Scd40Controller],
  providers: [Scd40Service],
})
export class SensoresModule {}
