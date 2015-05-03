/**
 * @module errors/forbidden
 */

'use strict';

module.exports = function forbidden(message, internalErrorCode) {

  Error.captureStackTrace(this, this.constructor);

  this.name = this.constructor.name;
  this.message = message || 'Forbidden';
  this.errorCode = 403;
  this.internalErrorCode = internalErrorCode || 403;
};

require('util').inherits(module.exports, Error);
