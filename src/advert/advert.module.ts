import { Module } from '@nestjs/common';
import { AppService } from './advert.service';
import { AppController } from './advert.controller';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  imports:[SharedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
