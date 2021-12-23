import { Module } from '@nestjs/common';
import { ApiusersService } from './apiusers.service';
import { ApiusersController } from './apiusers.controller';

@Module({
  controllers: [ApiusersController],
  providers: [ApiusersService],
})
export class ApiusersTestModule {}
