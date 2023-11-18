import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDocumentScd40Dto } from '../dtos/scd40.dto';

import { Scd40 } from '../entities/scd40.entity';

@Injectable()
export class Scd40Service {
  constructor(@InjectModel(Scd40.name) private scd40Model: Model<Scd40>) {}

  findAll() {
    return this.scd40Model.find().populate('sensor').exec();
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
    date.setHours(date.getHours() - 5)
    const newDocumentData = {
      ...data,
      fecha: date,
    };
    const newDocument = new this.scd40Model(newDocumentData);
    return newDocument.save();
  }

  remove(id: string) {
    return this.scd40Model.findByIdAndDelete(id).exec();
  }

  removeAll() {
    return this.scd40Model.deleteMany().exec();
  }
}
