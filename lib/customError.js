/**
 * @module errors/badRequest
 * @description Describe a Bad Request Error
 */

'use strict';

module.exports = function customError(name, message, errorCode, internalErrorCode) {

  Error.captureStackTrace(this, this.constructor);

  this.name = name || 'customError';
  this.message = message || 'Custom Error without message';
  this.errorCode = errorCode || 400;
  this.internalErrorCode = internalErrorCode || 400;
};

require('util').inherits(module.exports, Error);
