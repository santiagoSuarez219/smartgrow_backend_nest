import { Module } from '@nestjs/common';
import { HidroponicoController } from './controllers/hidroponico.controller';
import { HidroponicoService } from './services/hidroponico.service';

@Module({
  controllers: [HidroponicoController],
  providers: [HidroponicoService],
})
export class ActuadoresModule {}
