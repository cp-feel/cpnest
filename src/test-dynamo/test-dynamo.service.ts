import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import awsConfigUpdate from 'src/client';
import { v4 as uuid } from 'uuid';
import { CreateTestDynamoInput } from './dto/create-test-dynamo.input';
import { UpdateTestDynamoInput } from './dto/update-test-dynamo.input';
import { TestDynamo } from './entities/test-dynamo.entity';

@Injectable()
export class TestDynamoService {
  create(createTestDynamoInput: CreateTestDynamoInput) {
    const params = {
      TableName: 'Tests',
      Item: {
        id: { N: uuid.toString() },
        lastName: { S: createTestDynamoInput.lastName },
        firstName: { S: createTestDynamoInput.firstName },
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

  async findAll() {
    const params = {
      TableName: 'Tests',
    };

    // aws config setting
    awsConfigUpdate;

    // create DynamoDB service object
    const docClient = new AWS.DynamoDB();

    const items = (await docClient.scan(params).promise()).Items;

    const result: TestDynamo[] = []; // initialize object
    // result = result.concat(items);
    for (const idx in items) {
      console.log(items[idx]);
      const item = items[idx];
      result.push(
        new TestDynamo(
          item.id.N ?? '-1',
          item.lastName ? item.lastName.S : '',
          item.firstName ? item.firstName.S : '',
        ),
      );
    }

    return result;
  }

  findOne(id: number) {
    return `This action returns a #${id} testDynamo`;
  }

  update(id: number, updateTestDynamoInput: UpdateTestDynamoInput) {
    return `This action updates a #${id} testDynamo`;
  }

  remove(id: number) {
    return `This action removes a #${id} testDynamo`;
  }
}
