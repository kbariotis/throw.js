/**
 * @module errors/methodNotAllowed
 */

'use strict';

module.exports = function methodNotAllowed(message, internalErrorCode) {

  Error.captureStackTrace(this, this.constructor);

  this.name = this.constructor.name;
  this.message = message || 'Method Not Allowed';
  this.errorCode = 405;
  this.internalErrorCode = internalErrorCode || 405;
};

require('util').inherits(module.exports, Error);
