import { Schema, Document } from 'mongoose';

export const QuestionSchema = new Schema({
	question : {type: String, required: true},
	id :{type: String, required: true, unique:true},
	xp : {type: Number, required: true},
	response : {type: Boolean, required: true}
})

export interface Question extends Document{
	question : string;
	id : string;
	xp : number;
	response : boolean;
}