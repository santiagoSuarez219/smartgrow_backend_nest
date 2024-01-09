import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class SetPoints extends Document {
  @Prop()
  ph: number;

  @Prop()
  ec: number;
}

export const SetPointsSchema = SchemaFactory.createForClass(SetPoints);
