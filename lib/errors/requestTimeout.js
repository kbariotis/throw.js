/**
 * @module errors/requestTimeout
 */

'use strict';

module.exports = function requestTimeout(message, internalErrorCode) {

  Error.captureStackTrace(this, this.constructor);

  this.name = this.constructor.name;
  this.message = message || 'Request Timeout';
  this.errorCode = 408;
  this.internalErrorCode = internalErrorCode || 408;
};

require('util').inherits(module.exports, Error);
