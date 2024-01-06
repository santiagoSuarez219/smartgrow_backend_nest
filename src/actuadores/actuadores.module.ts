import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HidroponicoController } from './controllers/hidroponico.controller';
import { HidroponicoService } from './services/hidroponico.service';
import { ActuadoresController } from './controllers/actuadores.controller';
import { ActuadoresService } from './services/actuadores.service';
import { Actuadores, ActuadoresSchema } from './entities/actuadores.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Actuadores.name, schema: ActuadoresSchema },
    ]),
  ],
  controllers: [HidroponicoController, ActuadoresController],
  providers: [HidroponicoService, ActuadoresService],
})
export class ActuadoresModule {}
