import { Args, Query, Resolver, ID } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserResponse } from '@twitch-monorepo-nx/protos/generated/user/user';
import { User } from './models/user.model';

@Resolver('User')
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => String)
  async hello(): Promise<string> {
    return 'Hello from User Resolver!';
  }

  @Query(() => User)
  async getUser(@Args('id', { type: () => ID }) id: string): Promise<UserResponse> {
    console.log('getUser called with id:', id);
    return this.userService.findById(id);
  }
}
