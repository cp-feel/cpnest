import { Injectable } from '@nestjs/common';
import { CreateApiuserDto } from './dto/create-apiuser.dto';
import { UpdateApiuserDto } from './dto/update-apiuser.dto';

@Injectable()
export class ApiusersService {
  create(createApiuserDto: CreateApiuserDto) {
    return 'This action adds a new apiuser';
  }

  findAll() {
    return `This action returns all apiusers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} apiuser`;
  }

  update(id: number, updateApiuserDto: UpdateApiuserDto) {
    return `This action updates a #${id} apiuser`;
  }

  remove(id: number) {
    return `This action removes a #${id} apiuser`;
  }
}
