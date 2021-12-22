import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

const dynamoClient = new DynamoDBClient({
  region: 'us-east-2',
  // endpoint: 'arn:aws:dynamodb:us-east-2:621011711087:table/Tests',
  // endpoint: 'http://localhost:8000',
});

const docClient = DynamoDBDocumentClient.from(dynamoClient);

export default docClient;
