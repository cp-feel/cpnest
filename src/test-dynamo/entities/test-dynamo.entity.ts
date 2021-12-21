import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class TestDynamo {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;
}
