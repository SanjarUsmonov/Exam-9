import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  // Param,
  // Delete,
  // UseInterceptors,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO } from './dto/create-auth.dto';
import { RegisterDTO } from './dto/update-auth.dto';
// import { FileInterceptor } from '@nestjs/platform-express';
// import { extname } from 'path';
// import { UpdateAuthDto } from './dto/update-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() body: LoginDTO) {
    return this.authService.login(body);
  }

  // @UseInterceptors(
  //   FileInterceptor('file', {
  //     storage: diskStorage({
  //       destination: './uploads',
  //       filename: (req, file, cb) => {
  //         return cb(null, `${Date.now()}${extname(file.originalname)}`);
  //       },
  //     }),
  //   }),
  // )
  @Post('register')
  register(@Body() body: RegisterDTO) {
    return this.authService.register(body);
  }

  // @Get()
  // findAll() {
  //   return this.authService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.authService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
  //   return this.authService.update(+id, updateAuthDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.authService.remove(+id);
  // }
}
function diskStorage(): any {
  throw new Error('Function not implemented.');
}
