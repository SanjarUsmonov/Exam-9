import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './advert.controller';
import { AppService } from './advert.service';

describe('AuthController', () => {
  let controller: AppController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    controller = module.get<AppController>(AppController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
