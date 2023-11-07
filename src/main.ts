import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /**
   * cors untuk menentukan client yang dapat menggunakan api
   */

  app.enableCors();

  /**
   * helmet for security reason
   */

  app.use(helmet());

  /**
   * setting port
   */

  await app.listen(5012);
}
bootstrap();
