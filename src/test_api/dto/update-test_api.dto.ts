import { PartialType } from '@nestjs/swagger';
import { CreateApiuserDto } from './create-test_api.dto';

export class UpdateApiuserDto extends PartialType(CreateApiuserDto) {}
