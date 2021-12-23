import { Injectable } from '@nestjs/common';
import awsConfigUpdate from 'src/client';
import * as AWS from 'aws-sdk';
// import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  create(createUserInput: User) {
    const params = {
      TableName: 'User',
      Item: {
        user_id: { S: createUserInput.user_id },
        description: { S: createUserInput.description },
        user_passport_name: { S: createUserInput.user_passport_name },
        user_name: { S: createUserInput.user_name },
        email: { S: createUserInput.email },
        phone: { S: createUserInput.phone },
        language: { S: createUserInput.language },
        ratings: { B: createUserInput.ratings },
        payment_info: { B: createUserInput.payment_info },
        createdAt: { S: createUserInput.createdAt },
        updatedAt: { S: createUserInput.updatedAt },
      },
    };

    // aws config setting
    awsConfigUpdate;

    // create DynamoDB service object
    const docClient = new AWS.DynamoDB();

    docClient.putItem(params, function (err, data) {
      if (err) {
        console.log(err);
      }
      console.log('data', data);
    });
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
