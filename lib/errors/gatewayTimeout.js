/**
 * @module errors/gatewayTimeout
 */

'use strict';

module.exports = function gatewayTimeout(message, internalErrorCode) {

  Error.captureStackTrace(this, this.constructor);

  this.name = this.constructor.name;
  this.message = message || 'Gateway Timeout';
  this.errorCode = 504;
  this.internalErrorCode = internalErrorCode || 504;
};

require('util').inherits(module.exports, Error);
