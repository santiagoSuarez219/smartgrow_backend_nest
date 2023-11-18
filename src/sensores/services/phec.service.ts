import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateDocumentPhEcDto } from '../dtos/phec.dto';
import { PhEc } from '../entities/phec.entity';

@Injectable()
export class PhecService {
  constructor(@InjectModel(PhEc.name) private phEcModel: Model<PhEc>) {}

  findAll() {
    return this.phEcModel.find().populate('sensor').exec();
  }

  async findOne(id: string) {
    const data = await this.phEcModel.findById(id).exec();
    if (!data) {
      throw new NotFoundException(`dato #${id} not found`);
    }
    return data;
  }

  create(data: CreateDocumentPhEcDto) {
    const date = new Date();
    date.setHours(date.getHours() - 5)
    const newDocumentData = {
      ...data,
      fecha: date,
    };
    const newDocument = new this.phEcModel(newDocumentData);
    return newDocument.save();
  }

  remove(id: string) {
    return this.phEcModel.findByIdAndDelete(id).exec();
  }
}
