import { QuizzSchema, Quizz } from './schema/quizz.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class QuizzService {
  constructor(
    @InjectModel('Quizz') private readonly QuizzModel: Model<Quizz>,
  ) {}

  async submitResponse(response_user: boolean, id: string) {
    const rep = await this.QuizzModel.findOne({ id: id });
    if (rep.response == response_user) return true;
    else return false;
  }

  async getQuizz(id: string) {
    return await this.QuizzModel.findOne({ id: id }).select('-response');
  }
}
