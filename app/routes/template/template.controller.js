'use strict';

exports.getTest = function *() {

  // result sent back to frontend
  this.body =  {'result': 'get test succeeded'};
}

exports.postTest = function *() {
  const content = this.request.body;

  console.log(content);
  // result sent back to frontend
  this.body =  {'result': 'post test succeeded'};
}
