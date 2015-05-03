/**
 * @module errors/conflict
 */

'use strict';

module.exports = function conflict(message, internalErrorCode) {

  Error.captureStackTrace(this, this.constructor);

  this.name = this.constructor.name;
  this.message = message || 'Conflict';
  this.errorCode = 409;
  this.internalErrorCode = internalErrorCode || 409;
};

require('util').inherits(module.exports, Error);
