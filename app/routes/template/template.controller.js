'use strict';

exports.getTest = function *() {

  // result sent back to frontend
  this.body =  {'result': 'get test succeeded'};
}
