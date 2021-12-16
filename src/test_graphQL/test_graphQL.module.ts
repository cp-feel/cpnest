import { Module } from '@nestjs/common';
import { UsersService } from './test_graphQL.service';
import { UsersResolver } from './test_graphQL.resolver';

@Module({
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
