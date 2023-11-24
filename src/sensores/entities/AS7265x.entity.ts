import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import { Sensores } from '../entities/sensores.entity';

@Schema()
export class As7265x extends Document {
  @Prop()
  A: number;

  @Prop()
  B: number;

  @Prop()
  C: number;

  @Prop()
  D: number;

  @Prop()
  E: number;

  @Prop()
  F: number;

  @Prop()
  G: number;

  @Prop()
  H: number;

  @Prop()
  R: number;

  @Prop()
  I: number;

  @Prop()
  S: number;

  @Prop()
  J: number;
  
  @Prop()
  T: number;

  @Prop()
  U: number;

  @Prop()
  V: number;

  @Prop()
  W: number;

  @Prop()
  K: number;

  @Prop()
  L: number;

  @Prop({ required: true })
  fecha: Date;

  @Prop({ type: Types.ObjectId, ref: Sensores.name })
  sensor: Sensores | Types.ObjectId;
}

export const AS7265xSchema = SchemaFactory.createForClass(As7265x);
