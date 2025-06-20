import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import type { ClientGrpc } from '@nestjs/microservices';
import {
  USER_SERVICE_NAME,
  UserResponse,
  UserServiceClient,
} from '@twitch-monorepo-nx/protos/generated/user/user';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class UserService implements OnModuleInit {
  private grpcClient: UserServiceClient;

  constructor(@Inject(USER_SERVICE_NAME) private client: ClientGrpc) {}

  onModuleInit() {
    this.grpcClient = this.client.getService<UserServiceClient>(USER_SERVICE_NAME);
  }

  async findById(id: string): Promise<UserResponse> {
    console.log(this.grpcClient);

    return firstValueFrom(this.grpcClient.findUserById({ id }));
  }
}
