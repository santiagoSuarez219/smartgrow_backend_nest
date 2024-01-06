import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Recirculaciones extends Document {
  @Prop()
  date: Date;

  @Prop()
  cantidad: number;
}

export const RecirculacionesSchema =
  SchemaFactory.createForClass(Recirculaciones);
