import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './advert.service';
import { DataDTO } from './dto/create-auth.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 } from 'uuid';
import { extname } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post('advert')
  @UseInterceptors(
    FileInterceptor('picture', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          return cb(null, `${v4()}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  postAdvert(@Body() body: DataDTO , @UploadedFile() file : Express.Multer.File) {
    return this.appService.postAdvert(body, file);
  }
  @Get('advert')
  getAdvert() {
    return this.appService.getAdvert();
  }
  @Get('advert/:id')
  getAdvertOne(@Param() id: string) {
    return this.appService.getAdvertOne(id);
  }

  @Get(['adverts', 'adverts/:date'])
  getUsersByFilter(@Query('date') date: string) {
    return this.appService.getUsersByFilter(date);
  }

  @Put('advert/:id')
  putAdvert(@Body() body: DataDTO, @Param('id') id: string) {
    return this.appService.putAdvert([body, id]);
  }
  @Delete('advert/:id')
  detAdvert(@Param('id') id: string) {
    return this.appService.delAdvert(id);
  }
}
