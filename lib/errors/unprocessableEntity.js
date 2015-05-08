/**
 * @module errors/unprocessableEntity
 * @desc The 422 (Unprocessable Entity) status code means the server understands the content type of the request entity, 
 * and the syntax of the request entity is correct but was unable to process the contained instructions. 
 */

'use strict';

module.exports = function unprocessableEntity(message, internalErrorCode) {

  Error.captureStackTrace(this, this.constructor);

  this.name = 'unprocessableEntity';
  this.message = message || 'Unprocessable Entity';
  this.errorCode = 422;
  this.internalErrorCode = internalErrorCode || 422;
};

require('util').inherits(module.exports, Error);
