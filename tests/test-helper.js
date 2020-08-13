import Application from 'ember-msw-example-2/app';
import config from 'ember-msw-example-2/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
