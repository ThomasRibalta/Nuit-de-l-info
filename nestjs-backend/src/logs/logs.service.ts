import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Log } from './schema/logs.schema';

@Injectable()
export class LogsService {
  constructor(@InjectModel('Log') private readonly logModel: Model<Log>) {}

  async createLog(type: string, content: string) {
    const log = new this.logModel({ type, content });
    return await log.save();
  }

  async getLogsOrderByDate() {
    return await this.logModel.find().sort({ createdAt: -1 });
  }
}
