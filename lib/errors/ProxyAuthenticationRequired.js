/**
 * @module errors/proxyAuthenticationRequired
 */

'use strict';

module.exports = function ProxyAuthenticationRequired(message, errorCode) {

  Error.captureStackTrace(this, this.constructor);

  this.name = this.constructor.name;
  this.message = message || 'Proxy Authentication Required';
  this.statusCode = 407;
  this.errorCode = errorCode || 407;
};

require('util').inherits(module.exports, Error);
