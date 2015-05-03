/**
 * @module errors/unauthorizedRequest
 */

'use strict';

module.exports = function unauthorized(message, internalErrorCode) {

  Error.captureStackTrace(this, this.constructor);

  this.name = this.constructor.name;
  this.message = message || 'Unauthorized Request';
  this.errorCode = 401;
  this.internalErrorCode = internalErrorCode || 401;
};

require('util').inherits(module.exports, Error);
