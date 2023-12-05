import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Scd40Controller } from './controllers/scd40.controller';
import { Scd40Service } from './services/scd40.service';
import { Scd40, Scd40Schema } from './entities/scd40.entity';

import { PhecController } from './controllers/phec.controller';
import { PhecService } from './services/phec.service';
import { PhEc, PhEcSchema } from './entities/phec.entity';

import { SensoresController } from './controllers/sensores.controller';
import { SensoresService } from './services/sensores.service';
import { Sensores, SensoresSchema } from './entities/sensores.entity';

import { Bme680Controller } from './controllers/bme680.controller';
import { Bme680Service } from './services/bme680.service';
import { Bme680, Bme680Schema } from './entities/bme680.entity';

import { As7265xController } from './controllers/as7265x.controller';
import { As7265xService } from './services/as7265x.service';
import { AS7265xSchema, As7265x } from './entities/AS7265x.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Scd40.name, schema: Scd40Schema },
      { name: PhEc.name, schema: PhEcSchema },
      { name: Sensores.name, schema: SensoresSchema },
      { name: Bme680.name, schema: Bme680Schema },
      { name: As7265x.name, schema: AS7265xSchema },
    ]),
  ],
  controllers: [
    Scd40Controller,
    PhecController,
    SensoresController,
    Bme680Controller,
    As7265xController,
  ],
  providers: [Scd40Service, PhecService, SensoresService, Bme680Service, As7265xService],
})
export class SensoresModule {}
