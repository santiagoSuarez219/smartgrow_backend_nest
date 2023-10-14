import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import { Sensores } from '../entities/sensores.entity';

@Schema()
export class Scd40 extends Document {
  @Prop()
  co2: number;

  @Prop()
  temperatura: number;

  @Prop()
  humedad: number;

  @Prop()
  VPD: number;

  @Prop({ required: true })
  fecha: Date;

  @Prop({ type: Types.ObjectId, ref: Sensores.name })
  sensor: Sensores | Types.ObjectId;
}

export const Scd40Schema = SchemaFactory.createForClass(Scd40);
