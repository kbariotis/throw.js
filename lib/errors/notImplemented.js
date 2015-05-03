/**
 * @module errors/notImplemented
 */

'use strict';

var customError = require('../custom-error');

module.exports = function () {
  return new customError('notImplemented', 'Not Implemented', 501, 501);
};
