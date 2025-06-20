import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'User model representing a user in the system' })
export class User {
  @Field(() => ID, { description: 'Unique identifier for the user' })
  id: string;

  @Field(() => String, { description: 'Username of the user' })
  username: string;

  @Field(() => String, { description: 'Email address of the user' })
  email: string;
}
