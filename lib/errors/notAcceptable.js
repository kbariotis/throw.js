/**
 * @module errors/notAcceptable
 */

'use strict';

module.exports = function notAcceptable(message, internalErrorCode) {

  Error.captureStackTrace(this, this.constructor);

  this.name = this.constructor.name;
  this.message = message || 'Not Acceptable';
  this.errorCode = 406;
  this.internalErrorCode = internalErrorCode || 406;
};

require('util').inherits(module.exports, Error);
