import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Sensores extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  location: string;

  @Prop({ type: Date })
  createAt: Date;

  @Prop({ type: Date })
  updateAt: Date;
}

export const SensoresSchema = SchemaFactory.createForClass(Sensores);
