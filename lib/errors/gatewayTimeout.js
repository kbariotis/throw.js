/**
 * @module errors/gatewayTimeout
 */

'use strict';

var customError = require('../custom-error');

module.exports = function () {
  return new customError('gatewayTimeout', 'Gateway Timeout', 504, 504);
};
