import { Injectable, HttpStatus } from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../users/schema/user.schema';
import { LogsService } from 'src/logs/logs.service';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    private readonly logService: LogsService,
  ) {}

  async getUsers({ page, sortby, order, req, only, onlyname }) {
    if (!req.user.role || req.user.role !== 'admin') {
      await this.logService.createLog(
        'Error',
        `Unauthorized access by ${req.user.email}`,
      );
      return new HttpException('Unauthorized', 401);
    }
    if (!page || page < 1) {
      page = 1;
    }

    if (onlyname != null && !['role'].includes(onlyname)) {
      onlyname = null;
    }

    const filter = {};

    if (only && onlyname) {
      filter[onlyname] = only;
    }

    let clients = await this.userModel
      .find(only && onlyname ? filter : {})
      .sort({ [sortby]: order })
      .skip((page - 1) * 10)
      .limit(10)
      .select('-password');

    let currentPage = page;
    let totalClients = await this.userModel.countDocuments();
    let totalPages = Math.ceil(totalClients / 10);

    await this.logService.createLog(
      'Success',
      `Admin ${req.user.email} fetched users`,
    );

    return new HttpException(
      { clients: clients, currentPage: currentPage, totalPages: totalPages },
      HttpStatus.OK,
    );
  }
}
