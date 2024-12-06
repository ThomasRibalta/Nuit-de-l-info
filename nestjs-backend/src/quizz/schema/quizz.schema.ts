import { Schema, Document } from 'mongoose';

export const QuizzSchema = new Schema({
  question: { type: String, required: true },
  id: { type: String, required: true, unique: true },
  xp: { type: Number, required: true },
  response: { type: Boolean, required: true },
	explication: {type: String, required: true},
});

export interface Quizz extends Document {
  question: string;
  id: string;
  xp: number;
  response: boolean;
	explication: string;
}
