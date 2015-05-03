/**
 * @module errors/badRequest
 * @description Describe a Bad Request Error
 */

'use strict';

var util = require('util');

Object.defineProperty(Error.prototype, 'message', {configurable: true, enumerable: true});
Object.defineProperty(Error.prototype, 'stack', {configurable: true, enumerable: true});

module.exports = function CustomError(name, message, errorCode, internalErrorCode) {

  Error.captureStackTrace(this, this.constructor);

  this.name = name;
  this.message = message || 'Custom Error without message';
  this.errorCode = errorCode || 400;
  this.internalErrorCode = internalErrorCode || 400;
};

util.inherits(module.exports, Error);
