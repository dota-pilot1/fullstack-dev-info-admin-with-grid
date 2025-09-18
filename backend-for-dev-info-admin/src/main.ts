import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  app.enableCors();

  const port = process.env.PORT ? Number(process.env.PORT) : 8090;
  const host = process.env.HOST || '0.0.0.0';
  await app.listen({ port, host });
  const url = await app.getUrl();
  // eslint-disable-next-line no-console
  console.log(`🚀 Fastify-Nest app running at ${url}`);
}

bootstrap();
