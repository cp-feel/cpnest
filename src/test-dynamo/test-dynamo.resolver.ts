import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TestDynamoService } from './test-dynamo.service';
import { TestDynamo } from './entities/test-dynamo.entity';
import { CreateTestDynamoInput } from './dto/create-test-dynamo.input';
import { UpdateTestDynamoInput } from './dto/update-test-dynamo.input';

@Resolver(() => TestDynamo)
export class TestDynamoResolver {
  constructor(private readonly testDynamoService: TestDynamoService) {}

  @Mutation(() => TestDynamo)
  createTestDynamo(
    @Args('createTestDynamoInput') createTestDynamoInput: CreateTestDynamoInput,
  ) {
    return this.testDynamoService.create(createTestDynamoInput);
  }

  @Query(() => [TestDynamo], { name: 'testDynamos' })
  findAll() {
    return this.testDynamoService.findAll();
  }

  @Query(() => TestDynamo, { name: 'testDynamo' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.testDynamoService.findOne(id);
  }

  @Mutation(() => TestDynamo)
  updateTestDynamo(
    @Args('updateTestDynamoInput') updateTestDynamoInput: UpdateTestDynamoInput,
  ) {
    return this.testDynamoService.update(
      updateTestDynamoInput.id,
      updateTestDynamoInput,
    );
  }

  @Mutation(() => TestDynamo)
  removeTestDynamo(@Args('id', { type: () => Int }) id: number) {
    return this.testDynamoService.remove(id);
  }
}
