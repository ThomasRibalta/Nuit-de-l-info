import { User } from './../users/schema/user.schema';
import { QuizzSchema, Quizz } from './schema/quizz.schema';
import { InjectModel } from '@nestjs/mongoose';
import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { identity } from 'rxjs';

@Injectable()
export class QuizzService {
  constructor(
    @InjectModel('Quizz') private readonly QuizzModel: Model<Quizz>,
    @InjectModel('User') private readonly userModel: Model<User>,
  ) {}

  async submitResponse(response_user: any, id: string, req: any) {
    const rep = await this.QuizzModel.findOne({ id: id });
    if (!rep) return false;
    console.log('ici', rep.response, response_user);
    const bol = response_user.response === 'true' ? true : false;

    console.log('po', rep.response, bol);
    if (rep.response === bol) {
      let user = await this.userModel.findById(req.user.userId);
      if (!user) return false;
      console.log('user ', user, 'rep ', rep);
      user.xp = user.xp + rep.xp;
      console.log(rep.xp);
      await this.userModel.findByIdAndUpdate(req.user.userId, user);
      return new HttpException({ rep: rep, result: true }, HttpStatus.OK);
    } else return new HttpException({ rep: rep, result: false }, HttpStatus.OK);
  }

  async getQuizz(id: string, req: any) {
    const user = await this.userModel.findById(req.user.userId);

    let result = await this.QuizzModel.aggregate([
      { $group: { _id: null, totalXp: { $sum: '$xp' } } },
    ]);
    console.log('xp', user.xp);
    let ratio = (user.xp / 1000) * 100;
    if (parseInt(id) > 10) {
      user.achievements = [...user.achievements, 'end quizz'];
      await this.userModel.findByIdAndUpdate(req.user.userId, user);
    }

    const rep = await this.QuizzModel.findOne({ id: id });
    if (!rep)
      return new HttpException(
        { rep: null, ratio: ratio },
        HttpStatus.BAD_REQUEST,
      );
    return new HttpException({ rep: rep, ratio: ratio }, HttpStatus.OK);
  }
}
