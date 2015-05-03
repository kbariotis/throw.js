/**
 * @module errors/requestTimeout
 */

'use strict';

var customError = require('../custom-error');

module.exports = function () {
  return new customError('requestTimeout', 'Request Timeout', 408, 408);
};
