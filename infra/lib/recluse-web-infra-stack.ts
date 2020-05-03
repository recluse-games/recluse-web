import cdk = require('@aws-cdk/core');
import s3 = require('@aws-cdk/aws-s3');

export interface StaticSiteProps {
  /**
   * website domain name
   * @default recluse-games.com
   */
  siteDomain: string;
}

export class RecluseWebInfraStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: StaticSiteProps) {
    super(scope, id);

    // Content bucket
    const siteBucket = new s3.Bucket(this, 'SiteBucket', {
      bucketName: props.siteDomain,
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: 'error.html',
      publicReadAccess: true,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
    });

    new cdk.CfnOutput(this, 'Bucket', { value: siteBucket.bucketName });
  }
}
