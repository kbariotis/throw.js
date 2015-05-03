/**
 * @module errors/badRequest
 */

'use strict';

module.exports = function badRequest(message, internalErrorCode) {

  Error.captureStackTrace(this, this.constructor);

  this.name = 'badRequest';
  this.message = message || 'Bad Request';
  this.errorCode = 400;
  this.internalErrorCode = internalErrorCode || 400;
};

require('util').inherits(module.exports, Error);
