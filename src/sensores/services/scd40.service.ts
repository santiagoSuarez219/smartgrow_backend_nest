import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'

import { Scd40 } from '../entities/scd40.entity';

@Injectable()
export class Scd40Service {
  constructor(
    @InjectModel(Scd40.name) private scd40Model: Model<Scd40>
  ){}

  findAll(){
    return this.scd40Model.find().exec();
  }

  async findOne(id: string){
    const data = await this.scd40Model.findById(id).exec();
    if(!data){
      throw new NotFoundException(`dato #${id} not found`);
    }
    return data;
  }
}
