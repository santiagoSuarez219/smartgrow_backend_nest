import { Injectable, Logger, Inject } from '@nestjs/common';
import { connect } from 'mqtt';
import { ConfigType } from '@nestjs/config';

import config from '../../config';

@Injectable()
export class MqttService {
  private logger = new Logger(MqttService.name);
  private cliente;

  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {
    this.connect();
  }

  private connect(): void {
    const host = this.configService.mqtt.host;
    const port = this.configService.mqtt.port;
    const brokerUrl = `mqtt://${host}:${port}`;
    this.cliente = connect(brokerUrl);

    this.cliente.on('connect', () => {
      this.logger.log('Conectado al broker MQTT');
      this.suscribe('smartgrow/#');
    });

    this.cliente.on('message', (topic, message) => {
      this.handleMessage(topic, message);
    });

    this.cliente.on('error', (error) => {
      this.logger.error(error);
    });
  }

  private suscribe(topic: string): void {
    this.cliente.subscribe(topic, (error) => {
      if (error) {
        this.logger.error(error);
      } else {
        this.logger.log(`Suscrito a ${topic}`);
      }
    });
  }

  private handleMessage(topic: string, message: Buffer): void {
    const payload = message.toString();
    console.log(payload);
    this.logger.log(`Mensaje recibido en ${topic}`);
  }

  publish(topic: string, message: string) {
    this.cliente.publish(topic, message);
    this.logger.log(`Mensaje publicado en ${topic}: ${message}`);
  }
}
