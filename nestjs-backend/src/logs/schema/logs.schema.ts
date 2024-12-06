import { Schema, Document } from 'mongoose';

export const LogSchema = new Schema({
  type: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export interface Log extends Document {
  id: string;
  type: string;
  content: string;
  createdAt: Date;
}
