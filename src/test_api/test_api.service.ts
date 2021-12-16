import { Injectable } from '@nestjs/common';
import { CreateApiuserDto } from './dto/create-test_api.dto';
import { UpdateApiuserDto } from './dto/update-test_api.dto';
import { ApiUser } from './entities/test_api.entity';

@Injectable()
export class ApiusersService {
  private apiusers: ApiUser[] = [];

  create(createApiuserDto: CreateApiuserDto) {
    this.apiusers.push({
      id: this.apiusers.length + 1,
      ...createApiuserDto,
    });
    console.log(this.apiusers);
  }

  findAll(): ApiUser[] {
    return this.apiusers;
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
