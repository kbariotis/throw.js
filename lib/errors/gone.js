/**
 * @module errors/gone
 */

'use strict';

var customError = require('../custom-error');

module.exports = function () {
  return new customError('gone', 'Gone', 410, 410);
};
