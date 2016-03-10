'use strict';

const koa = require('koa');
const router = require('koa-route');
const template = require('./template.controller');

const app = koa();

app.use(router.get('/get-test', template.getTest));
app.use(router.post('/post-test', template.postTest));

module.exports = app;
