import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //CONFIGURAÇÃO DO SWAGGER
  const config = new DocumentBuilder()
    .setTitle('API Profile Controller - Danilo Araujo') //TÍTULO DA DOCUMENTAÇÃO
    .setDescription('Essa documentação é apenas parte da nossa aplicação back-end, usamos o Swagger da OpenApi, uma biblioteca dentro do próprio Nest.js.') //DESCRIÇÃO DA DOCUMENTAÇÃO
    .setVersion('1.0') //VERSÃO DA DOCUMENTAÇÃO
    .addTag('API - Profile Controller')  //TAG DA DOCUMENTAÇÃO
    .build(); //CONSTRUÇÃO DO DOCUMENTO

  //CRIAÇÃO DO DOCUMENTO
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  app.useGlobalPipes(new ValidationPipe()); //VALIDAÇÃO DE DADOS

  //ESCUTA A PORTA 3000
  await app.listen(3000);
}
bootstrap();
