import { CreateTableCommand, CreateTableInput } from '@aws-sdk/client-dynamodb';

import docClient from '../client';

const userTableParams: CreateTableInput = {
  TableName: 'User',
  KeySchema: [
    { AttributeName: 'user_id', KeyType: 'HASH' }, // partition key
    { AttributeName: 'description', KeyType: 'RANGE' }, // sork key
    // 단일 PK 는 hash type key 로 사용하며 키의 기본값은 스칼라 데이터 형식만 가능하다
    // 복합 PK 는 두 개의 attribute 조합을 기본으로 사용한다
    // 여기서는 복합 PK 로 구성한다
    // hasy type key 는 일치equal 방식의 검색만 지원한다
    // range type 은 일치, 부등호, 포함 등의 범위를 지정할 수 있는 검색을 지원한다
  ],
  AttributeDefinitions: [
    // S = string, N = number, BOOL = boolean
    { AttributeName: 'user_id', AttributeType: 'S' },
    { AttributeName: 'description', AttributeType: 'S' },
    // 아래의 칭구들을 모두 KeySchema 로 만들어야 sort key 로 사용이 가능하다
    // { AttributeName: 'user_passport_name', AttributeType: 'S' },
    // { AttributeName: 'user_name', AttributeType: 'S' },
    // { AttributeName: 'email', AttributeType: 'S' },
    // { AttributeName: 'phone', AttributeType: 'S' },
    // { AttributeName: 'language', AttributeType: 'S' },
    // { AttributeName: 'ratings', AttributeType: 'B' },
    // { AttributeName: 'permission_push_notification', AttributeType: 'S' },
    // { AttributeName: 'permission_on_driving', AttributeType: 'S' },
    // { AttributeName: 'passport_img', AttributeType: 'S' },
    // { AttributeName: 'payment_info', AttributeType: 'B' },
    // { AttributeName: 'createdAt', AttributeType: 'S' },
    // { AttributeName: 'updatedAt', AttributeType: 'S' },
  ],
  // 프로비저닝된 모드
  ProvisionedThroughput: {
    ReadCapacityUnits: 10, // 읽기 용량 단위
    WriteCapacityUnits: 10, // 쓰기 용량 단위
  },
};

const command = new CreateTableCommand(userTableParams);

docClient
  .send(command)
  .then((r) => {
    console.log(r);
  })
  .catch((e) => {
    console.log('error', e);
  });
