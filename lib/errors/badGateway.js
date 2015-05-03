/**
 * @module errors/badGateway
 */

'use strict';

module.exports = function badGateway(message, internalErrorCode) {

  Error.captureStackTrace(this, this.constructor);

  this.name = this.constructor.name;
  this.message = message || 'Bad Gateway';
  this.errorCode = 502;
  this.internalErrorCode = internalErrorCode || 502;
};

require('util').inherits(module.exports, Error);
