import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { TransformInterceptor } from './transform.interceptor';
import { BadRequestExceptionFilter } from './badRequestException.filter';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalFilters(new BadRequestExceptionFilter());
  app.use(cookieParser());
  app.enableCors({
    credentials: true,
    methods: ['GET', 'POST', 'PUT'],
    origin: true,
  });

  await app.listen(configService.get<number>('PORT'));
}

bootstrap();
