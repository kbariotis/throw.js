/**
 * @module errors/failedDependency
 * @desc  The 424 (Failed Dependency) status code means that the method could
   not be performed on the resource because the requested action
   depended on another action and that action failed. 
 */

'use strict';

module.exports = function failedDependency(message, internalErrorCode) {

  Error.captureStackTrace(this, this.constructor);

  this.name = 'failedDependency';
  this.message = message || 'Failed Dependency';
  this.errorCode = 424;
  this.internalErrorCode = internalErrorCode || 424;
};

require('util').inherits(module.exports, Error);
