import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateDocumentBme680Dto } from '../dtos/bme680.dto';

import { Bme680 } from '../entities/bme680.entity';

@Injectable()
export class Bme680Service {
  constructor(@InjectModel(Bme680.name) private bme680Model: Model<Bme680>) {}

  findAll() {
    return this.bme680Model.find().populate('sensor').exec();
  }

  async findOne(id: string) {
    const data = await this.bme680Model.findById(id).exec();
    if (!data) {
      throw new NotFoundException(`dato #${id} not found`);
    }
    return data;
  }

  create(data: CreateDocumentBme680Dto) {
    const date = new Date();
    date.setHours(date.getHours() - 5)
    const newDocumentData = {
      ...data,
      fecha: date,
    };
    const newDocument = new this.bme680Model(newDocumentData);
    return newDocument.save();
  }

  remove(id: string) {
    return this.bme680Model.findByIdAndDelete(id).exec();
  }
}
