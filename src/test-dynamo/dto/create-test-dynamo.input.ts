import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTestDynamoInput {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;
}
