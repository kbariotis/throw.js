/**
 * @module errors/gone
 */

'use strict';

module.exports = function gone(message, internalErrorCode) {

  Error.captureStackTrace(this, this.constructor);

  this.name = this.constructor.name;
  this.message = message || 'Gone';
  this.errorCode = 410;
  this.internalErrorCode = internalErrorCode || 410;
};

require('util').inherits(module.exports, Error);
