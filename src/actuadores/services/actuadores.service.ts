import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import {
  CreateActuadoresDto,
  UpdateActuadoresDto,
} from '../dtos/actuadores.dto';
import { Actuadores } from '../entities/actuadores.entity';

@Injectable()
export class ActuadoresService {
  constructor(
    @InjectModel(Actuadores.name) private actuadoresModel: Model<Actuadores>,
  ) {}

  findAll() {
    return this.actuadoresModel.find().exec();
  }

  create(data: CreateActuadoresDto) {
    const newDocument = new this.actuadoresModel(data);
    return newDocument.save();
  }

  update(id: string, changes: UpdateActuadoresDto) {
    return this.actuadoresModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
  }
}
