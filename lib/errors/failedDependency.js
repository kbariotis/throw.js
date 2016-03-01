/**
 * @module errors/failedDependency
 * @desc  The 424 (Failed Dependency) status code means that the method could
   not be performed on the resource because the requested action
   depended on another action and that action failed.
 */

'use strict';

module.exports = function FailedDependency(message, errorCode) {

  Error.captureStackTrace(this, this.constructor);

  this.name = this.constructor.name;
  this.message = message || 'Failed Dependency';
  this.statusCode = 424;
  this.errorCode = errorCode || 424;
};

require('util').inherits(module.exports, Error);
