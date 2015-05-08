/**
 * @module errors/unauthorizedRequest
 */

'use strict';

module.exports = function unauthorized(message, errorCode) {

  Error.captureStackTrace(this, this.constructor);

  this.name = this.constructor.name;
  this.message = message || 'Unauthorized Request';
  this.statusCode = 401;
  this.errorCode = errorCode || 401;
};

require('util').inherits(module.exports, Error);
