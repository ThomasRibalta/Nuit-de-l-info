import { Injectable, NestMiddleware } from '@nestjs/common';
import { MetricsService } from './metrics.service';

@Injectable()
export class MetricsMiddleware implements NestMiddleware {
  constructor(private readonly metricsService: MetricsService) {}

  use(req: any, res: any, next: () => void) {
    const startTime = Date.now();
    const method = req.method;
    const path = req.route ? req.route.path : req.url;

    res.on('finish', () => {
      const status = res.statusCode;
      const duration = (Date.now() - startTime) / 1000;
      this.metricsService.incrementRequestCount(method, path, status);
      this.metricsService.recordRequestDuration(method, path, duration);
    });

    next();
  }
}
