import { Injectable, OnModuleInit } from '@nestjs/common';
import {
  Counter,
  Histogram,
  Registry,
  collectDefaultMetrics,
} from 'prom-client';

@Injectable()
export class MetricsService implements OnModuleInit {
  private readonly registry: Registry;
  private readonly httpRequestCount: Counter<string>;
  private readonly httpRequestDuration: Histogram<string>;

  constructor() {
    this.registry = new Registry();

    this.httpRequestCount = new Counter({
      name: 'http_requests_total',
      help: 'Nombre total de requêtes HTTP',
      labelNames: ['method', 'path', 'status'],
      registers: [this.registry],
    });

    this.httpRequestDuration = new Histogram({
      name: 'http_request_duration_seconds',
      help: 'Durée des requêtes HTTP en secondes',
      labelNames: ['method', 'path'],
      buckets: [0.1, 0.5, 1, 2, 5],
      registers: [this.registry],
    });
  }

  onModuleInit() {
    collectDefaultMetrics({ register: this.registry });
  }

  incrementRequestCount(method: string, path: string, status: number) {
    this.httpRequestCount.inc({ method, path, status: status.toString() });
  }

  recordRequestDuration(method: string, path: string, duration: number) {
    this.httpRequestDuration.observe({ method, path }, duration);
  }

  async getMetrics(req: any): Promise<any> {
    if (!req.user.role || req.user.role !== 'admin') {
      return { error: 'You do not have permission to access this resource' };
    }
    const metric = await this.registry.getMetricsAsJSON();
    return metric;
  }
}
