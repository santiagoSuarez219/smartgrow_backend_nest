import { Injectable } from '@nestjs/common';

import { MqttService } from '../../mqtt/services/mqtt.service';

@Injectable()
export class HidroponicoService {
  constructor(private mqttService: MqttService) {}

  toggleActuador(actuador: string, timeRecirculacion = 30000) {
    if (actuador === 'recirculacion_hidroponico') {
      this.mqttService.publish('smartgrow/hidroponico/actuadores', actuador);
      setTimeout(() => {
        this.mqttService.publish('smartgrow/hidroponico/actuadores', actuador);
      }, timeRecirculacion);
    } else {
      this.mqttService.publish('smartgrow/hidroponico/actuadores', actuador);
    }
  }
}
