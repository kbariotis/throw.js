/**
 * @module errors/notImplemented
 */

'use strict';

module.exports = function notImplemented(message, internalErrorCode) {

  Error.captureStackTrace(this, this.constructor);

  this.name = this.constructor.name;
  this.message = message || 'Not Implemented';
  this.errorCode = 501;
  this.internalErrorCode = internalErrorCode || 501;
};

require('util').inherits(module.exports, Error);
