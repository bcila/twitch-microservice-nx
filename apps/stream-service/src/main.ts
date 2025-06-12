import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { STREAM_PACKAGE_NAME } from '@twitch-microservice-nx/protos/generated/stream';
import { STREAM_PROTO_PATH } from '@twitch-microservice-nx/protos';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: STREAM_PACKAGE_NAME,
        protoPath: STREAM_PROTO_PATH,
        url: '0.0.0:50053',
      },
    },
  );
  await app.listen();

  Logger.log(`🚀 Stream Service is running on: 50053`);
}

bootstrap();
