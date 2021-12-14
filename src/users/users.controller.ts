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
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({
    summary: '회원가입',
    description: '',
  })
  @ApiTags('[USER] 유저')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation({
    summary: '전체 유저 조회',
    description: '',
  })
  @ApiTags('[USER] 유저')
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: '유저 조회',
    description: '',
  })
  @ApiTags('[USER] 유저')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: '유저 업데이트',
    description: '',
  })
  @ApiTags('[USER] 유저')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: '유저 탈퇴',
    description: '',
  })
  @ApiTags('[USER] 유저')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
