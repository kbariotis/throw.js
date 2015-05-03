/**
 * @module errors/notFound
 */

'use strict';

module.exports = function notFound(message, internalErrorCode) {

  Error.captureStackTrace(this, this.constructor);

  this.name = this.constructor.name;
  this.message = message || 'The requested resource couldn\'t be found';
  this.errorCode = 404;
  this.internalErrorCode = internalErrorCode || 404;
};

require('util').inherits(module.exports, Error);
