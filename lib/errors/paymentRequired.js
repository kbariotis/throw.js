/**
 * @module errors/paymentRequired
 */

'use strict';

module.exports = function paymentRequired(message, errorCode) {

  Error.captureStackTrace(this, this.constructor);

  this.name = this.constructor.name;
  this.message = message || 'Payment Required';
  this.statusCode = 402;
  this.errorCode = errorCode || 402;
};

require('util').inherits(module.exports, Error);
