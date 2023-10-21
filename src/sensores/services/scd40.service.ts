import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, FilterQuery } from 'mongoose';
import {
  CreateDocumentScd40Dto,
  FilterProductByDataDto,
} from '../dtos/scd40.dto';

import { Scd40 } from '../entities/scd40.entity';

@Injectable()
export class Scd40Service {
  constructor(@InjectModel(Scd40.name) private scd40Model: Model<Scd40>) {}

  findAll(params?: FilterProductByDataDto) {
    if (params.hasOwnProperty('data')) {
      const filters: FilterQuery<Scd40> = {};
      const { data } = params;
      filters.sensor = data;
      return this.scd40Model.find({}, `${data} fecha`).exec();
    }
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
