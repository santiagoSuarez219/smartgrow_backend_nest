import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import { Sensores } from '../entities/sensores.entity';

@Schema()
export class Scd40 extends Document {
  @Prop({ required: true })
  co2: number;

  @Prop({ required: true })
  temperatura: number;

  @Prop({ required: true })
  humedad: number;

  @Prop({ required: true })
  fecha: Date;

  @Prop({ type: Types.ObjectId, ref: Sensores.name })
  sensor: Sensores | Types.ObjectId;
}

export const Scd40Schema = SchemaFactory.createForClass(Scd40);
