import { Injectable, Logger } from '@nestjs/common';
import { connect } from 'mqtt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MqttService {
  private logger = new Logger(MqttService.name);
  private cliente;

  constructor(private readonly configService: ConfigService) {
    this.connect();
  }

  private connect(): void {
    // const host = 'localhost';
    const host = this.configService.get('MQTT_HOST');
    const port = this.configService.get('MQTT_PORT');
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
    const payload = JSON.parse(message.toString());
    console.log(payload);
    // if (topic === 'smartgrow/sensores') {
    //   this.sensoresService.create(payload.sensor, payload.data);
    // }
    this.logger.log(`Mensaje recibido en ${topic}`);
  }

  publish(topic: string, message: string) {
    this.cliente.publish(topic, message);
    this.logger.log(`Mensaje publicado en ${topic}: ${message}`);
  }
}
