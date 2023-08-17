import { Schema, Prop } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Estates {
  @Prop({
    unique: true,
    required: true,
    trim: true,
  })
  title: string;
}
