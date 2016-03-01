/**
 * @module errors/methodNotAllowed
 */

'use strict';

module.exports = function MethodNotAllowed(message, errorCode) {

  Error.captureStackTrace(this, this.constructor);

  this.name = this.constructor.name;
  this.message = message || 'Method Not Allowed';
  this.statusCode = 405;
  this.errorCode = errorCode || 405;
};

require('util').inherits(module.exports, Error);
