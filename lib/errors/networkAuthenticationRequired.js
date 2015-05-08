/**
 * @module errors/networkAuthenticationRequired
 * @desc  The client needs to authenticate to gain network access. 
 * Intended for use by intercepting proxies used to control access to the network. 
 */

'use strict';

module.exports = function networkAuthenticationRequired(message, internalErrorCode) {

  Error.captureStackTrace(this, this.constructor);

  this.name = 'networkAuthenticationRequired';
  this.message = message || 'Network Authentication Required';
  this.errorCode = 511;
  this.internalErrorCode = internalErrorCode || 511;
};

require('util').inherits(module.exports, Error);
