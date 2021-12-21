import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { CreateTestDynamoInput } from './dto/create-test-dynamo.input';
import { UpdateTestDynamoInput } from './dto/update-test-dynamo.input';
import { TestDynamo } from './entities/test-dynamo.entity';

@Injectable()
export class TestDynamoService {
  private testDynamo: TestDynamo[];

  create(createTestDynamoInput: CreateTestDynamoInput) {
    const params = {
      TableName: 'Tests',
      Item: {
        id: { N: createTestDynamoInput.id.toString() },
        lastName: { S: createTestDynamoInput.lastName },
        firstName: { S: createTestDynamoInput.firstName },
      },
    };

    // how to generating id
    // sad
    // N = string
    // CreateTestDynamoInput id value check

    console.log(params.Item);

    AWS.config.update({
      accessKeyId: 'AKIAZBFZOWRX4BILICHR',
      region: 'us-east-2',
    });

    const docClient = new AWS.DynamoDB();

    console.log(docClient);

    docClient.putItem(params, function (err, data) {
      if (err) {
        console.log(err);
      }
      console.log('data', data);
    });
  }

  findAll() {
    const params = {
      TableName: 'Tests',
    };

    AWS.config.update({
      accessKeyId: 'AKIAZBFZOWRX4BILICHR',
      region: 'us-east-2',
    });

    const docClient = new AWS.DynamoDB();

    console.log(docClient);

    docClient.scan(params, function (err, data) {
      if (err) {
        console.log(err);
      }
      console.log('data', data);
    });
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
