import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Credit Card Validation')
    .setDescription('Credit Card Validation Api Documentation')
    .setVersion('1.0')
    .addTag('Credit card')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST'],
    credentials: true,
  });
  await app.listen(3000);
}
bootstrap();
