import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import { Sensores } from '../entities/sensores.entity';

@Schema()
export class As7265x extends Document {
  @Prop()
  410: number;

  @Prop()
  435: number;

  @Prop()
  460: number;

  @Prop()
  485: number;

  @Prop()
  510: number;

  @Prop()
  535: number;

  @Prop()
  560: number;

  @Prop()
  585: number;

  @Prop()
  610: number;

  @Prop()
  645: number;

  @Prop()
  680: number;

  @Prop()
  705: number;
  
  @Prop()
  730: number;

  @Prop()
  760: number;

  @Prop()
  810: number;

  @Prop()
  860: number;

  @Prop()
  900: number;

  @Prop()
  940: number;

  @Prop({ required: true })
  fecha: Date;

  @Prop({ type: Types.ObjectId, ref: Sensores.name })
  sensor: Sensores | Types.ObjectId;
}

export const AS7265xSchema = SchemaFactory.createForClass(As7265x);
