import { User } from './../users/schema/user.schema';
import { QuizzSchema, Quizz } from './schema/quizz.schema';
import { InjectModel } from '@nestjs/mongoose';
import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class QuizzService {
  constructor(@InjectModel('Quizz') private readonly QuizzModel: Model<Quizz>, @InjectModel('User') private readonly userModel: Model<User>) {}

  async submitResponse(response_user: boolean, id: string, req : any) {
    const rep = await this.QuizzModel.findOne({ id: id });
		if (!rep) return false;
    if (rep.response == response_user) 
		{
			const user = await this.userModel.findOne({ id:req.user.id });
			user.xp = user.xp + rep.xp
			this.userModel.findByIdAndUpdate(id, user);
			return new HttpException({ rep: {...rep, result : true}}, HttpStatus.OK);
		}
    else 
			return new HttpException({ rep: rep, result : false}, HttpStatus.OK);
  }

	async getQuizz(id: string, req: any) {
		const user = await this.userModel.findOne({ id:req.user.id });
		const result = await this.QuizzModel.aggregate([
      { $group: { _id: null, totalXp: { $sum: '$xp' } } },
    ]);
		const ratio = (user.xp / result[0]?.totalXp) * 100
		if (parseInt(id) > 10)
		{
			user.achievements = [...user.achievements, "end quizz"]
			this.userModel.findByIdAndUpdate(id, user);
		}

    const rep = await this.QuizzModel.findOne({ id: id });
		if (!rep) return	false
    return new HttpException({ rep: rep, ratio : ratio}, HttpStatus.OK);
  }
}
