import mongoose, { Schema, Document } from 'mongoose';

export const UserSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, default: 'user' },
  xp: { type: Number, required: true, default: 0 },
  achievements: { type: Array, required: true, default: [] },
  titles: { type: Array, required: true, default: [] },
});

export interface User extends Document {
  id: string;
  username: string;
  email: string;
  password: string;
  role: string;
  xp: number;
  achievements: Array<string>;
  titles: Array<string>;
}
