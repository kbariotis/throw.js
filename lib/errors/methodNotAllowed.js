/**
 * @module errors/methodNotAllowed
 */

'use strict';

var customError = require('../custom-error');

module.exports = function () {
  return new customError('methodNotAllowed', 'Method Not Allowed', 405, 405);
};
