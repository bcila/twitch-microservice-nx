import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'User model representing a user in the system' })
export class User {
  @Field(() => ID)
  id!: string;

  @Field(() => String)
  username!: string;

  @Field(() => String)
  email!: string;
}
