import * as AWS from 'aws-sdk';

const awsConfigUpdate = AWS.config.update({
  accessKeyId: 'AKIAZBFZOWRX4BILICHR',
  region: 'us-east-2',
});

export default awsConfigUpdate;
