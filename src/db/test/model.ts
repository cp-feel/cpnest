import { CreateTableCommand, CreateTableInput } from '@aws-sdk/client-dynamodb';

import docClient from '../client';

const testTableParams: CreateTableInput = {
  TableName: 'Tests',
  KeySchema: [
    { AttributeName: 'id', KeyType: 'HASH' }, // partition key
    { AttributeName: 'lastName', KeyType: 'RANGE' }, // sork key
    // 단일 PK 는 hash type key 로 사용하며 키의 기본값은 스칼라 데이터 형식만 가능하다
    // 복합 PK 는 두 개의 attribute 조합을 기본으로 사용한다
    // 여기서는 복합 PK 로 구성한다
    // hasy type key 는 일치equal 방식의 검색만 지원한다
    // range type 은 일치, 부등호, 포함 등의 범위를 지정할 수 있는 검색을 지원한다
  ],
  AttributeDefinitions: [
    { AttributeName: 'id', AttributeType: 'N' },
    { AttributeName: 'lastName', AttributeType: 'S' },
    // S = string, N = number, BOOL = boolean
  ],
  // 프로비저닝된 모드
  ProvisionedThroughput: {
    ReadCapacityUnits: 10, // 읽기 용량 단위
    WriteCapacityUnits: 10, // 쓰기 용량 단위
  },
  // GlobalSecondaryIndexes: [],
  LocalSecondaryIndexes: [
    // optional (list of LocalSecondaryIndex)
    {
      IndexName: 'index_id_lastName',
      KeySchema: [
        {
          // Required HASH type attribute - must match the table's HASH key attribute name
          AttributeName: 'id',
          KeyType: 'HASH',
        },
        {
          // alternate RANGE key attribute for the secondary index
          AttributeName: 'lastName',
          KeyType: 'RANGE',
        },
      ],
      Projection: {
        // required
        ProjectionType: 'ALL', // (ALL | KEYS_ONLY | INCLUDE)
      },
    },
    // ... more local secondary indexes ...
  ],
};

const command = new CreateTableCommand(testTableParams);

docClient
  .send(command)
  .then((r) => {
    console.log(r);
  })
  .catch((e) => {
    console.log('error', e);
  });
