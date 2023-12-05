import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'

import { As7265x } from '../entities/AS7265x.entity'
import { CreateDocumentAs7265xDto } from '../dtos/AS7265x.dto'

@Injectable()
export class As7265xService {
    constructor(@InjectModel(As7265x.name) private as7265xModel: Model<As7265x>){}

    findAll(){
        return this.as7265xModel.find().populate('sensor').exec()
    }

    async findOne(id: string) {
        const data = await this.as7265xModel.findById(id)
        if(!data){
            throw new NotFoundException(`dato ${id} not found`)
        }
        return data;
    }

    create(data: CreateDocumentAs7265xDto){
        const date = new Date();
        date.setHours(date.getHours() - 5);
        const newDocumentData = {
            ...data,
            fecha: date,
        };
        const newDocument = new this.as7265xModel(newDocumentData);
        return newDocument.save();
    }

    remove(id: string){
        return this.as7265xModel.findByIdAndDelete(id).exec();
    }

    removeAll(){
        return this.as7265xModel.deleteMany().exec();
    }
}
