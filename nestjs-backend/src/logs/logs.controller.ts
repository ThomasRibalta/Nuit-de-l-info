import { Controller, Get, Req } from '@nestjs/common';
import { LogsService } from './logs.service';
import { JwtAuthGuard } from '../jwt/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';

@Controller('logs')
export class LogsController {
  constructor(private readonly LogsService: LogsService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  getLogs(@Req() req: any) {
    return this.LogsService.getLogsOrderByDate(req);
  }
}
