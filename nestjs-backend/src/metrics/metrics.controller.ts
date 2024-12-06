import { Controller, Get, Req } from '@nestjs/common';
import { MetricsService } from './metrics.service';
import { JwtAuthGuard } from '../jwt/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';

@Controller('metrics')
export class MetricsController {
  constructor(private readonly metricsService: MetricsService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getMetrics(@Req() req: any) {
    return this.metricsService.getMetrics(req);
  }
}
