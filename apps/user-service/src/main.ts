import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { USER_PACKAGE_NAME } from '@twitch-microservice-nx/protos/generated/user';
import { USER_PROTO_PATH } from '@twitch-microservice-nx/protos';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: USER_PACKAGE_NAME,
        protoPath: USER_PROTO_PATH,
        url: '0.0.0:50052',
      },
    },
  );
  await app.listen();

  Logger.log(`🚀 User Service is running on: 50052`);
}

bootstrap();
