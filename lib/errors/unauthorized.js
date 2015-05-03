/**
 * @module errors/unauthorizedRequest
 */

'use strict';

var customError = require('../custom-error');

module.exports = function () {
  return new customError('unauthorized', 'Unauthorized Request', 401, 401);
};
