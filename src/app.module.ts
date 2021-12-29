import { Module } from '@nestjs/common';
import { ApiusersModule } from './test_api/test_api.module';

@Module({
  imports: [ApiusersModule],
})
export class AppModule {}
