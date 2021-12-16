import { Module } from '@nestjs/common';
import { ApiusersService } from './test_api.service';
import { ApiusersController } from './test_api.controller';

@Module({
  controllers: [ApiusersController],
  providers: [ApiusersService],
})
export class ApiusersModule {}
