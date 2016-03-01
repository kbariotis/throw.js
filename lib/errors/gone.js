/**
 * @module errors/gone
 */

'use strict';

module.exports = function Gone(message, errorCode) {

  Error.captureStackTrace(this, this.constructor);

  this.name = this.constructor.name;
  this.message = message || 'Gone';
  this.statusCode = 410;
  this.errorCode = errorCode || 410;
};

require('util').inherits(module.exports, Error);
