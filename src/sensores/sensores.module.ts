import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Scd40Controller } from './controllers/scd40.controller';
import { Scd40Service } from './services/scd40.service';
import { Scd40, Scd40Schema } from './entities/scd40.entity';

import { PhecController } from './controllers/phec.controller';
import { PhecService } from './services/phec.service';
import { PhEc, PhEcSchema } from './entities/phec.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Scd40.name, schema: Scd40Schema },
      { name: PhEc.name, schema: PhEcSchema },
    ]),
  ],
  controllers: [Scd40Controller, PhecController],
  providers: [Scd40Service, PhecService],
})
export class SensoresModule {}
