import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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

  // Crear relacion
}

export const PhEcSchema = SchemaFactory.createForClass(PhEc);
