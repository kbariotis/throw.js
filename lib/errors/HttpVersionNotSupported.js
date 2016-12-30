/**
 * @module errors/httpVersionNotSupported
 */

'use strict';

module.exports = function HttpVersionNotSupported(message, errorCode) {

  Error.captureStackTrace(this, this.constructor);

  this.name = this.constructor.name;
  this.message = message || 'HTTP Version Not Supported';
  this.statusCode = 505;
  this.errorCode = errorCode || 505;
};

require('util').inherits(module.exports, Error);
