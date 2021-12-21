import { CreateTestDynamoInput } from './create-test-dynamo.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTestDynamoInput extends PartialType(CreateTestDynamoInput) {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;
}
