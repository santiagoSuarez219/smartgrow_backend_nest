import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SensoresModule } from './sensores/sensores.module';
import { ActuadoresModule } from './actuadores/actuadores.module';
import { MqttModule } from './mqtt/mqtt.module';
import { WebsocketModule } from './websocket/websocket.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    SensoresModule,
    ActuadoresModule,
    MqttModule,
    WebsocketModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
