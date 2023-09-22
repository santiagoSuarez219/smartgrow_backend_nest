import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Configuración Swagger en NestJS
  const config = new DocumentBuilder()
    .setTitle('smartgrow API')
    .setDescription('Documentación smartgrow API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  // URL API
  SwaggerModule.setup('docs', app, document);
  await app.listen(3000);
}
bootstrap();
