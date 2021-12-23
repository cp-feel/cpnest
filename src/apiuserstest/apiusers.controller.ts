import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApiusersService } from './apiusers.service';
import { CreateApiuserDto } from './dto/create-apiuser.dto';
import { UpdateApiuserDto } from './dto/update-apiuser.dto';

@ApiTags('User')
@Controller('apiusers')
export class ApiusersController {
  constructor(private readonly apiusersService: ApiusersService) {}

  @Post()
  @ApiOperation({
    summary: '유저 등록',
    description: '',
  })
  create(@Body() createApiuserDto: CreateApiuserDto) {
    return this.apiusersService.create(createApiuserDto);
  }

  @Get()
  @ApiOperation({
    summary: '유저 조회',
    description: '',
  })
  findAll() {
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
