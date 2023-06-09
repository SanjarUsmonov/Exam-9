import { NestFactory } from '@nestjs/core';
import { AppModule } from './advert/advert.module';
import {ValidationPipe} from "@nestjs/common"
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger"

async function bootstrap() {
  const PORT = process.env.PORT || 4000;
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true
  }))

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors()

  await app.listen(PORT, () => {
    console.log(PORT);
  });
  
}
bootstrap();
