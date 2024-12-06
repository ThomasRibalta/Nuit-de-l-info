import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from './dto/create-user.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from '../users/schema/user.schema';
import * as bcrypt from 'bcrypt';
import { LogsService } from '../logs/logs.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectModel('User') private readonly userModel: Model<User>,
    private readonly logService: LogsService,
  ) {}

  async register(createUserDto: CreateUserDto, res: any) {
    if (await this.userModel.findOne({ email: createUserDto.email })) {
      await this.logService.createLog(
        'Error',
        `User ${createUserDto.email} already exists`,
      );
      return new HttpException(
        { error: 'User already exists' },
        HttpStatus.BAD_REQUEST,
      );
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(
      createUserDto.password,
      saltRounds,
    );
    createUserDto.password = hashedPassword;

    const user = new this.userModel(createUserDto);
    await user.save();

    const payload = { sub: user._id, role: user.role };
    const token = this.jwtService.sign(payload);

    res.cookie('jwt', token, {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 60 * 1,
    });

    await this.logService.createLog(
      'Success',
      `User ${createUserDto.email} registered`,
    );

    return new HttpException({ client: payload }, HttpStatus.CREATED);
  }

  async login(loginUserDto: LoginUserDto, res: any) {
    const user = await this.userModel.findOne({ email: loginUserDto.email });
    if (!user) {
      this.logService.createLog(
        'Warning',
        `User ${loginUserDto.email} not found`,
      );
      return new HttpException(
        { error: 'User not found' },
        HttpStatus.NOT_FOUND,
      );
    }

    const isPasswordMatch = await bcrypt.compare(
      loginUserDto.password,
      user.password,
    );
    if (!isPasswordMatch) {
      this.logService.createLog(
        'Error',
        `Invalid credentials for user ${loginUserDto.email}`,
      );
      return new HttpException(
        { error: 'Invalid credentials' },
        HttpStatus.BAD_REQUEST,
      );
    }

    const payload = { sub: user._id, role: user.role };
    const token = this.jwtService.sign(payload);

    res.cookie('jwt', token, {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 60 * 1,
    });

    await this.logService.createLog(
      'Success',
      `User ${loginUserDto.email} logged in`,
    );

    return new HttpException({ client: payload }, HttpStatus.OK);
  }

  async logout(res: any) {
    res.clearCookie('jwt');
    await this.logService.createLog('Success', `User logged out`);
    return new HttpException({ message: 'Logged out' }, HttpStatus.OK);
  }

  async getUserByToken(req: any) {
    if (!req.user) {
      await this.logService.createLog('Error', `Unauthorized access`);
      return new HttpException('Unauthorized', 401);
    }
    return new HttpException({ client: req.user }, HttpStatus.OK);
  }
}
