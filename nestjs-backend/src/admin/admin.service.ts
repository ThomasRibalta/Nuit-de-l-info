import { Injectable, HttpStatus } from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../users/schema/user.schema';

@Injectable()
export class AdminService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async getUsers({ page, sortby, order, req, only, onlyname }) {
    if (!req.user.role || req.user.role !== 'admin') {
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

    return new HttpException(
      { clients: clients, currentPage: currentPage, totalPages: totalPages },
      HttpStatus.OK,
    );
  }
}
