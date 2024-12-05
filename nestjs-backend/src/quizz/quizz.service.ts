import { QuestionSchema, Question } from './schema/quizz.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class QuizzService {
	constructor(@InjectModel('Question') private readonly QuestionModel: Model<Question>) {}

	async SubmitResponse(response_user : boolean, id : string){
		const rep = await this.QuestionModel.findOne({id : id});
		if (rep.response == response_user)
			return true
		else
			return false
	}

	async GetQuestion(id : string){
		return await this.QuestionModel.findOne({id : id})
	}
}
