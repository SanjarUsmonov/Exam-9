import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('users')
  getUsers() {
    return this.appService.getUsers();
  }

  @Get('user/:id')
  getUser(@Param('id') id: string) {
    return this.appService.getUser(id);
  }

  @Get(['date', 'date/:date'])
  getUsersByFilter(@Query('date') date: string) {
    return this.appService.getUsersByFilter(date);
  }
}
