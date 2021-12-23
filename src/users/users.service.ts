import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
// import { CreateUserInput } from './dto/create-user.input';
// import { UpdateUserInput } from './dto/update-user.input';
// import { User } from './entities/user.entity';

import * as dynamoose from 'dynamoose';

@Injectable()
export class UsersService {
  create(createUserTestInput) {
    const User = dynamoose.model('User', {
      user_id: String,
      description: String,
      user_passport_name: String,
      user_name: String,
    });

    const myUser = new User({
      user_id: createUserTestInput.user_id,
      description: createUserTestInput.description,
      user_passport_name: createUserTestInput.user_passport_name,
      user_name: createUserTestInput.user_name,
    });

    console.log('params :', myUser);

    // aws config setting
    dynamoose.aws.sdk.config.update({
      accessKeyId: 'AKIAZBFZOWRX4BILICHR',
      //   secretAccessKey: 'SECRET',
      region: 'us-east-2',
    });

    const ddb = new dynamoose.aws.sdk.DynamoDB({
      accessKeyId: 'AKIAZBFZOWRX4BILICHR',
      //   secretAccessKey: 'SECRET',
      region: 'us-east-2',
    });

    // Set DynamoDB instance to the Dynamoose DDB instance
    dynamoose.aws.ddb.set(ddb);

    try {
      myUser.save();
      console.log('Save operation was successful.');
    } catch (error) {
      console.error(error);
    }

    myUser.save((error) => {
      if (error) {
        console.error(error);
      } else {
        console.log('Save operation was successful.');
      }
    });
  }

  // create(createUserTestInput) {
  //   const params = {
  //     TableName: 'User',
  //     Item: {
  //       user_id: { S: createUserTestInput.user_id },
  //       description: { S: createUserTestInput.description },
  //       user_passport_name: { S: createUserTestInput.user_passport_name },
  //       user_name: { S: createUserTestInput.user_name },
  //       email: { S: createUserTestInput.email },
  //       phone: { S: createUserTestInput.phone },
  //       language: { S: createUserTestInput.language },
  //       // ratings: { M: JSON.parse(JSON.stringify(createUserTestInput.ratings)) },
  //       ratings: {
  //         M: {
  //           average: { N: createUserTestInput.ratings.average.toString() },
  //           rating: { N: createUserTestInput.ratings.rating.toString() },
  //         },
  //       },
  //       // average: { N: createUserTestInput.ratings.average },
  //       // payment_info: { B: createUserTestInput.payment_info },
  //       createdAt: { S: createUserTestInput.createdAt },
  //       updatedAt: { S: createUserTestInput.updatedAt },
  //     },
  //   };

  //   console.log('params :', params);
  //   console.log('ratings :', params.Item.ratings);

  //   // aws config setting
  //   awsConfigUpdate;

  //   // create DynamoDB service object
  //   const docClient = new AWS.DynamoDB();

  //   docClient.putItem(params, function (err, data) {
  //     if (err) {
  //       console.log(err);
  //     }
  //     console.log('data', data);
  //   });
  // }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  // update(id: number, updateUserInput: UpdateUserInput) {
  //   return `This action updates a #${id} user`;
  // }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
