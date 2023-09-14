import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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

  // Crear relacion
}

export const Scd40Schema = SchemaFactory.createForClass(Scd40);
