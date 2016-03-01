/**
 * @module errors/forbidden
 */

'use strict';

module.exports = function Forbidden(message, errorCode) {

  Error.captureStackTrace(this, this.constructor);

  this.name = this.constructor.name;
  this.message = message || 'Forbidden';
  this.statusCode = 403;
  this.errorCode = errorCode || 403;
};

require('util').inherits(module.exports, Error);
