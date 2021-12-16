import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApiusersService } from './test_api.service';
import { CreateApiuserDto } from './dto/create-test_api.dto';
import { UpdateApiuserDto } from './dto/update-test_api.dto';
import { ApiUser } from './entities/test_api.entity';

@ApiTags('User')
@Controller('apiusers')
export class ApiusersController {
  constructor(private readonly apiusersService: ApiusersService) {}

  @Post()
  create(@Body() createApiuserDto: CreateApiuserDto) {
    return this.apiusersService.create(createApiuserDto);
  }

  @Get()
  findAll(): ApiUser[] {
    return this.apiusersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.apiusersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApiuserDto: UpdateApiuserDto) {
    return this.apiusersService.update(+id, updateApiuserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apiusersService.remove(+id);
  }
}
