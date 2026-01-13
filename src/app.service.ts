import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to Nexify Store API!';
  }

  getHealth(): { status: string; timestamp: string; uptime: number } {
    return {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    };
  }

  getApiInfo(): {
    name: string;
    version: string;
    description: string;
    environment: string;
  } {
    return {
      name: 'Nexify Store API',
      version: '1.0.0',
      description: 'E-commerce platform backend API',
      environment: process.env.NODE_ENV || 'development',
    };
  }
}