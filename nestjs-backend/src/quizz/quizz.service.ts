import { QuizzSchema, Quizz } from './schema/quizz.schema';
import { InjectModel } from '@nestjs/mongoose';
import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class QuizzService {
  constructor(@InjectModel('Quizz') private readonly QuizzModel: Model<Quizz>) {}

  async submitResponse(response_user: boolean, id: string) {
    const rep = await this.QuizzModel.findOne({ id: id });
		if (!rep) return false;
    if (rep.response == response_user) return new HttpException({ rep: {...rep, result : true}}, HttpStatus.OK);
    else return new HttpException({ rep: rep, result : false}, HttpStatus.OK);
  }

	async getQuizz(id: string) {
    const rep = await this.QuizzModel.findOne({ id: id });
		if (!rep) return	false
    return new HttpException({ rep: rep }, HttpStatus.OK);
  }
}
