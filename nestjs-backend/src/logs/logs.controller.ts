import { Controller, Get } from '@nestjs/common';
import { LogsService } from './logs.service';

@Controller('logs')
export class LogsController {
  constructor(private readonly LogsService: LogsService) {}

  @Get()
  getLogs() {
    return this.LogsService.getLogsOrderByDate();
  }
}
