/**
 * @module errors/internalServerError
 */

'use strict';

module.exports = function internalServerError(message, internalErrorCode) {

  Error.captureStackTrace(this, this.constructor);

  this.name = this.constructor.name;
  this.message = message || 'Internal Server Error';
  this.errorCode = 500;
  this.internalErrorCode = internalErrorCode || 500;
};

require('util').inherits(module.exports, Error);
