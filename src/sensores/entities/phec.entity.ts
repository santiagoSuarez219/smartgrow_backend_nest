import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import { Sensores } from '../entities/sensores.entity';

@Schema()
export class PhEc extends Document {
  @Prop({ required: true })
  ph: number;

  @Prop({ required: true })
  ec: number;

  @Prop({ required: true })
  temperatura: number;

  @Prop({ required: true })
  fecha: Date;

  @Prop({ type: Types.ObjectId, ref: Sensores.name })
  sensor: Sensores | Types.ObjectId;
}

export const PhEcSchema = SchemaFactory.createForClass(PhEc);
