/**
 * @module errors/customError
 * @description customError Class
 */

'use strict';

module.exports = function customError(name, message, statusCode, errorCode) {

  Error.captureStackTrace(this, this.constructor);

  this.name = name || 'customError';
  this.message = message || 'Custom Error without message';
  this.statusCode = statusCode || 400;
  this.errorCode = errorCode || 400;
};

require('util').inherits(module.exports, Error);
