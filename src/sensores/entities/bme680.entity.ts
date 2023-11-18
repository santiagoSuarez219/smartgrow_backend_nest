import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import { Sensores } from '../entities/sensores.entity';

@Schema()
export class Bme680 extends Document {
  @Prop()
  temperatura: number;

  @Prop()
  humedad: number;

  @Prop()
  altitud: number;

  @Prop()
  cov: number;

  @Prop()
  VPD: number;

  @Prop({ required: true })
  fecha: Date;

  @Prop({ type: Types.ObjectId, ref: Sensores.name })
  sensor: Sensores | Types.ObjectId;
}

export const Bme680Schema = SchemaFactory.createForClass(Bme680);
