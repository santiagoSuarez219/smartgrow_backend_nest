import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { UpdateSetPointsDto } from '../dtos/setpoints.dto';
import { SetPoints } from '../entities/setpoints.entity';

@Injectable()
export class SetpointsService {
  constructor(
    @InjectModel(SetPoints.name) private setPointsModel: Model<SetPoints>,
  ) {}

  async onModuleInit() {
    try {
      const cantidad = await this.dataInit();
      if (cantidad === 0) {
        const newDocument = new this.setPointsModel({
          ph: 0,
          ec: 0,
        });
        return newDocument.save();
      }
    } catch (error) {
      console.error(error);
    }
  }

  async dataInit(): Promise<number> {
    try {
      const cantidad = await this.setPointsModel.countDocuments().exec();
      return cantidad;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  findAll() {
    return this.setPointsModel.find().exec();
  }

  update(id: string, changes: UpdateSetPointsDto) {
    return this.setPointsModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
  }
}
