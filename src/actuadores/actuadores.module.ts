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
import { SetpointsController } from './controllers/setpoints.controller';
import { SetpointsService } from './services/setpoints.service';
import { SetPoints, SetPointsSchema } from './entities/setpoints.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Actuadores.name, schema: ActuadoresSchema },
      { name: Recirculaciones.name, schema: RecirculacionesSchema },
      { name: SetPoints.name, schema: SetPointsSchema },
    ]),
  ],
  controllers: [
    HidroponicoController,
    ActuadoresController,
    RecirculacionController,
    SetpointsController,
  ],
  providers: [
    HidroponicoService,
    ActuadoresService,
    RecirculacionService,
    SetpointsService,
  ],
})
export class ActuadoresModule {}
