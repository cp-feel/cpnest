import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-test_graphQL.input';
import { UpdateUserInput } from './dto/update-test_graphQL.input';
import { User } from './entities/test_graphQL.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];

  create(createUserInput: CreateUserInput) {
    this.users.push({
      id: this.users.length + 1,
      firstName: createUserInput.firstName,
      lastName: createUserInput.lastName,
    });
    // console.log(this.users);
  }

  findAll(): User[] {
    // console.log(this.users);
    return this.users;
  }

  findOne(id: number) {
    // console.log(id);
    return this.users.find((user) => user.id === id);
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    const user = this.findOne(id);
    // console.log(user);
    user.firstName = updateUserInput.firstName;
    user.lastName = updateUserInput.lastName;
    console.log(user);
  }

  remove(id: number) {
    this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    // console.log('removed', this.users);
  }
}
