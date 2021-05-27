import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

  @Get('ping')
  getData(): string {
    return 'pong';
  }
}
