import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path/posix';
// import { UsersModule } from './test_graphQL/test_graphQL.module';
import { ApiusersModule } from './test_api/test_api.module';
import { TestDynamoModule } from './test-dynamo/test-dynamo.module';
import { UsersModule } from './users/users.module';
import { ApiusersTestModule } from './apiuserstest/apiusers.module';

@Module({
  imports: [
    UsersModule,
    ApiusersModule,
    ApiusersTestModule,
    TestDynamoModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
})
export class AppModule {}
