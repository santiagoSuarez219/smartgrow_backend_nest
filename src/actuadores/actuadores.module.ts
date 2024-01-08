import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HidroponicoController } from './controllers/hidroponico.controller';
import { HidroponicoService } from './services/hidroponico.service';
import { ActuadoresController } from './controllers/actuadores.controller';
import { ActuadoresService } from './services/actuadores.service';
import { Actuadores, ActuadoresSchema } from './entities/actuadores.entity';
import { RecirculacionService } from './services/recirculacion.service';
import { RecirculacionController } from './controllers/recirculacion.controller';
import {
  Recirculaciones,
  RecirculacionesSchema,
} from './entities/recirculacion.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Actuadores.name, schema: ActuadoresSchema },
      { name: Recirculaciones.name, schema: RecirculacionesSchema },
    ]),
  ],
  controllers: [
    HidroponicoController,
    ActuadoresController,
    RecirculacionController,
  ],
  providers: [HidroponicoService, ActuadoresService, RecirculacionService],
})
export class ActuadoresModule {}
