import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
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

  //----------------------------------------------------------------------------------------------------------------------
  
  @Post(['product/add', 'product/add/:id'])
  postProduct(@Body() body:any, @Param('id') id:string){
    return this.appService.postProduct([body, id])
  }
  
  @Get('products')
  getProducts() {
    return this.appService.getProducts();
  }
  
  @Get('product/:id')
  getProduct(@Param('id') id: string) {
    return this.appService.getProduct(id);
  }

  //----------------------------------------------------------------------------------------------------------------------\

  @Get('todo')
   getTodo(){
    return this.appService.getTodo()
   }
}
