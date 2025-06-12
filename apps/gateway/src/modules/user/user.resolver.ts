import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class UserResolver {
  @Query(() => String)
  async hello(): Promise<string> {
    return 'Hello from User Resolver!';
  }
}
