'use strict'

const koa = require('koa');
const mount = require('koa-mount');
const router = require('koa-route');

const errorResponder = require('./middleware/error-responder');

const templateRoute = require('./routes/template/template.router');

const app = koa();

app.use(errorResponder)

app.use(router.get('/', function *pint() {
  this.body = 'Template Backend';
}));

app.use(mount('/template', templateRoute));

module.exports = app;
