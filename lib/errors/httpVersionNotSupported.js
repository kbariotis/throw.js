/**
 * @module errors/httpVersionNotSupported
 */

'use strict';

module.exports = function httpVersionNotSupported(message, internalErrorCode) {

  Error.captureStackTrace(this, this.constructor);

  this.name = this.constructor.name;
  this.message = message || 'HTTP Version Not Supported';
  this.errorCode = 505;
  this.internalErrorCode = internalErrorCode || 505;
};

require('util').inherits(module.exports, Error);
