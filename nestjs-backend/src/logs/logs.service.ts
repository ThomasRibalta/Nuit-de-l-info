import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Log } from './schema/logs.schema';
import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class LogsService {
  constructor(@InjectModel('Log') private readonly logModel: Model<Log>) {}

  async createLog(type: string, content: string) {
    const log = new this.logModel({ type, content });
    return await log.save();
  }

  async getLogsOrderByDate(req: any) {
    if (!req.user.role || req.user.role !== 'admin') {
      return new HttpException(
        { error: 'You do not have permission to access this resource' },
        HttpStatus.FORBIDDEN,
      );
    }
    const log = await this.logModel.find().sort({ createdAt: -1 });
    return new HttpException({ log: log }, HttpStatus.OK);
  }
}
