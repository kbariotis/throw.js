/**
 * @module errors/conflict
 */

'use strict';

module.exports = function conflict(message, errorCode) {

  Error.captureStackTrace(this, this.constructor);

  this.name = this.constructor.name;
  this.message = message || 'Conflict';
  this.statusCode = 409;
  this.errorCode = errorCode || 409;
};

require('util').inherits(module.exports, Error);
