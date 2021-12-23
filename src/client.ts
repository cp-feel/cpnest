import * as AWS from 'aws-sdk';
import * as dynamoose from 'dynamoose';

export const awsConfigUpdate = AWS.config.update({
  accessKeyId: 'AKIAZBFZOWRX4BILICHR',
  region: 'us-east-2',
});

export const ddb = dynamoose.aws.sdk.config.update({
  accessKeyId: 'AKIAZBFZOWRX4BILICHR',
  //   secretAccessKey: 'SECRET',
  region: 'us-east-2',
});
