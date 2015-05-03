/**
 * @module errors/serviceUnavailable
 */

'use strict';

module.exports = function serviceUnavailable(message, internalErrorCode) {

  Error.captureStackTrace(this, this.constructor);

  this.name = this.constructor.name;
  this.message = message || 'Service Unavailable';
  this.errorCode = 503;
  this.internalErrorCode = internalErrorCode || 503;
};

require('util').inherits(module.exports, Error);
