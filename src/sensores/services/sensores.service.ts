import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Sensores } from '../entities/sensores.entity';
import {
  CreateDocumentSensorDto,
  UpdateDocumentSensorDto,
} from '../dtos/sensores.dto';

@Injectable()
export class SensoresService {
  constructor(
    @InjectModel(Sensores.name) private sensoresModel: Model<Sensores>,
  ) {}

  findAll() {
    return this.sensoresModel.find().exec();
  }

  async findOne(id: string) {
    const data = await this.sensoresModel.findById(id).exec();
    if (!data) {
      throw new NotFoundException(`dato #${id} not found`);
    }
    return data;
  }

  create(data: CreateDocumentSensorDto) {
    const date = new Date();
    const newDocumentData = {
      ...data,
      createAt: date,
    };
    const newDocument = new this.sensoresModel(newDocumentData);
    return newDocument.save();
  }

  update(id: string, changes: UpdateDocumentSensorDto) {
    const date = new Date();
    const newDocumentData = {
      ...changes,
      updateAt: date,
    };
    return this.sensoresModel
      .findByIdAndUpdate(id, { $set: newDocumentData }, { new: true })
      .exec();
  }

  remove(id: string) {
    return this.sensoresModel.findByIdAndDelete(id).exec();
  }
}
