import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, FilterQuery } from 'mongoose';
import {
  CreateDocumentScd40Dto,
  FilterProductByDataDto,
} from '../dtos/scd40.dto';

import { Scd40 } from '../entities/scd40.entity';
import { MqttService } from '../../mqtt/services/mqtt.service';

@Injectable()
export class Scd40Service {
  constructor(
    @InjectModel(Scd40.name) private scd40Model: Model<Scd40>,
    private mqttService: MqttService,
  ) {}

  findAll(params?: FilterProductByDataDto) {
    if (params.hasOwnProperty('data')) {
      const filters: FilterQuery<Scd40> = {};
      const { data, fecha_inicial, fecha_final } = params;
      filters.temperatura = { $gt: 0 };
      filters.humedad = { $gt: 0 };
      filters.co2 = { $gt: 0 };
      if (fecha_inicial && fecha_final) {
        filters.fecha = {
          $gte: fecha_inicial,
          $lte: fecha_final,
        };
      }
      return this.scd40Model.find(filters, `${data} fecha`).exec();
    }
    return this.scd40Model.find().populate('sensor').exec();
  }

  findLastData() {
    return this.scd40Model.find().sort({ $natural: -1 }).limit(1);
  }

  async findOne(id: string) {
    const data = await this.scd40Model.findById(id).exec();
    if (!data) {
      throw new NotFoundException(`dato #${id} not found`);
    }
    return data;
  }

  create(data: CreateDocumentScd40Dto) {
    const date = new Date();
    date.setHours(date.getHours() - 5);
    const newDocumentData = {
      ...data,
      fecha: date,
    };
    const newDocument = new this.scd40Model(newDocumentData);
    this.mqttService.publish(
      'smartgrow/sensores/scd40',
      JSON.stringify(newDocument),
    );
    return newDocument.save();
  }

  remove(id: string) {
    return this.scd40Model.findByIdAndDelete(id).exec();
  }

  removeAll() {
    return this.scd40Model.deleteMany().exec();
  }
}
