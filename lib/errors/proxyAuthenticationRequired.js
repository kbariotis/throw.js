/**
 * @module errors/proxyAuthenticationRequired
 */

'use strict';

module.exports = function proxyAuthenticationRequired(message, internalErrorCode) {

  Error.captureStackTrace(this, this.constructor);

  this.name = this.constructor.name;
  this.message = message || 'Proxy Authentication Required';
  this.errorCode = 407;
  this.internalErrorCode = internalErrorCode || 407;
};

require('util').inherits(module.exports, Error);
