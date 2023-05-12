import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppModule } from './advert/advert.module';
import { SharedModule } from './shared/shared.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AppModule,
    SharedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModules {}