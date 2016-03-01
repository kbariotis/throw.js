/**
 * @module errors/requestTimeout
 */

'use strict';

module.exports = function RequestTimeout(message, errorCode) {

  Error.captureStackTrace(this, this.constructor);

  this.name = this.constructor.name;
  this.message = message || 'Request Timeout';
  this.statusCode = 408;
  this.errorCode = errorCode || 408;
};

require('util').inherits(module.exports, Error);
