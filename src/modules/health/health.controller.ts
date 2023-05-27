import { Controller, Get, Route, Tags } from 'tsoa';
import { healthService } from './health.service';
import { HealthResponse } from './health.types';

@Tags('Health')
@Route('/health')
export class HealthController extends Controller {
  @Get()
  getHealth(): HealthResponse {
    return healthService.getHealth();
  }
}
