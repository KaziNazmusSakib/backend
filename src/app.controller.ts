import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('health')
  getHealth() {
    return this.appService.getHealth();
  }

  @Get('api-info')
  getApiInfo() {
    return this.appService.getApiInfo();
  }

  @Get('status')
  getStatus(): {
    message: string;
    status: string;
    database: string;
    timestamp: string;
  } {
    return {
      message: 'Nexify Store API is running',
      status: 'operational',
      database: 'PostgreSQL',
      timestamp: new Date().toISOString(),
    };
  }
}