/**
 * @module errors/serviceUnavailable
 */

'use strict';

module.exports = function ServiceUnavailable(message, errorCode) {

  Error.captureStackTrace(this, this.constructor);

  this.name = this.constructor.name;
  this.message = message || 'Service Unavailable';
  this.statusCode = 503;
  this.errorCode = errorCode || 503;
};

require('util').inherits(module.exports, Error);
