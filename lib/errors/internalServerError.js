/**
 * @module errors/internalServerError
 */

'use strict';

var customError = require('../custom-error');

module.exports = function () {
  return new customError('internalServerError', 'Internal Server Error', 500, 500);
};
