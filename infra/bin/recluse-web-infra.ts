#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import {RecluseWebInfraStack, StaticSiteProps} from '../lib/recluse-web-infra-stack';

const app = new cdk.App();

const props: StaticSiteProps = {
  siteDomain: 'recluse-games.com'
};

new RecluseWebInfraStack(app, 'RecluseWebInfraStack', props);
