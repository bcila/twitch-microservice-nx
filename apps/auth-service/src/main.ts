import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app/app.module';
import { AUTH_PACKAGE_NAME } from '@twitch-monorepo-nx/protos/generated/auth';
import { AUTH_PROTO_PATH } from '@twitch-monorepo-nx/protos';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: AUTH_PACKAGE_NAME,
        protoPath: AUTH_PROTO_PATH,
        url: '0.0.0:50051',
      },
    },
  );
  await app.listen();

  Logger.log(`🚀 Auth Service is running on: 50051`);
}

bootstrap();
