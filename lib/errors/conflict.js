/**
 * @module errors/conflict
 */

'use strict';

var customError = require('../custom-error');

module.exports = function () {
  return new customError('conflict', 'Conflict', 409, 409);
};
