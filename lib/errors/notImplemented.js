/**
 * @module errors/notImplemented
 */

'use strict';

module.exports = function notImplemented(message, errorCode) {

  Error.captureStackTrace(this, this.constructor);

  this.name = this.constructor.name;
  this.message = message || 'Not Implemented';
  this.statusCode = 501;
  this.errorCode = errorCode || 501;
};

require('util').inherits(module.exports, Error);
