/**
 * @module errors/badGateway
 */

'use strict';

module.exports = function badGateway(message, errorCode) {

  Error.captureStackTrace(this, this.constructor);

  this.name = this.constructor.name;
  this.message = message || 'Bad Gateway';
  this.statusCode = 502;
  this.errorCode = errorCode || 502;
};

require('util').inherits(module.exports, Error);
