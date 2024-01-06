import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import {
  CreateRecirculacionesDto,
  UpdateRecirculacionesDto,
} from '../dtos/recirculacion.dto';
import { Recirculaciones } from '../entities/recirculacion.entity';

@Injectable()
export class RecirculacionService {
  constructor(
    @InjectModel(Recirculaciones.name)
    private recirculacionModel: Model<Recirculaciones>,
  ) {}

  findAll() {
    return this.recirculacionModel.find().exec();
  }

  create(data: CreateRecirculacionesDto) {
    const newDocument = new this.recirculacionModel(data);
    return newDocument.save();
  }

  update(id: string, changes: UpdateRecirculacionesDto) {
    return this.recirculacionModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
  }
}
