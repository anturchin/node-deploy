import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): { message: string } {
    return this.appService.getHello();
  }

  @Post('data')
  postData(@Body() data: { name: string }): {
    message: string;
    received: { name: string };
  } {
    return { message: 'Data received!', received: data };
  }
}
