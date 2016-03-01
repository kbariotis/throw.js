/**
 * @module errors/gatewayTimeout
 */

'use strict';

module.exports = function GatewayTimeout(message, errorCode) {

  Error.captureStackTrace(this, this.constructor);

  this.name = this.constructor.name;
  this.message = message || 'Gateway Timeout';
  this.statusCode = 504;
  this.errorCode = errorCode || 504;
};

require('util').inherits(module.exports, Error);
