import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { USER_PACKAGE_NAME } from '@twitch-microservice-nx/protos/generated/user';
import { USER_PROTO_PATH } from '@twitch-microservice-nx/protos';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: USER_PACKAGE_NAME,
        transport: Transport.GRPC,
        options: {
          package: USER_PACKAGE_NAME,
          protoPath: USER_PROTO_PATH,
        },
      },
    ]),
  ],
  providers: [UserResolver, UserService],
})
export class UserModule {}
