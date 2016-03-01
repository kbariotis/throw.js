/**
 * @module errors/badRequest
 */

'use strict';

module.exports = function BadRequest(message, errorCode) {

  Error.captureStackTrace(this, this.constructor);

  this.name = 'BadRequest';
  this.message = message || 'Bad Request';
  this.statusCode = 400;
  this.errorCode = errorCode || 400;
};

require('util').inherits(module.exports, Error);
