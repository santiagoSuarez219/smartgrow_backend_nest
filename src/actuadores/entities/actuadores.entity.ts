import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Actuadores extends Document {
  @Prop()
  text: string;

  @Prop()
  estado: boolean;
}

export const ActuadoresSchema = SchemaFactory.createForClass(Actuadores);
