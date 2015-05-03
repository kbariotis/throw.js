/**
 * @module errors/paymentRequired
 */

'use strict';

module.exports = function paymentRequired(message, internalErrorCode) {

  Error.captureStackTrace(this, this.constructor);

  this.name = this.constructor.name;
  this.message = message || 'Payment Required';
  this.errorCode = 402;
  this.internalErrorCode = internalErrorCode || 402;
};

require('util').inherits(module.exports, Error);
