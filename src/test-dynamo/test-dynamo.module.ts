import { Module } from '@nestjs/common';
import { TestDynamoService } from './test-dynamo.service';
import { TestDynamoResolver } from './test-dynamo.resolver';

@Module({
  providers: [TestDynamoResolver, TestDynamoService],
})
export class TestDynamoModule {}
