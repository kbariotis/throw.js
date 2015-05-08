/**
 * @module errors/internalServerError
 */

'use strict';

module.exports = function internalServerError(message, errorCode) {

  Error.captureStackTrace(this, this.constructor);

  this.name = this.constructor.name;
  this.message = message || 'Internal Server Error';
  this.statusCode = 500;
  this.errorCode = errorCode || 500;
};

require('util').inherits(module.exports, Error);
