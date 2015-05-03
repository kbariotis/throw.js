/**
 * @module errors/forbidden
 */

'use strict';

var customError = require('../custom-error');

module.exports = function () {
  return new customError('forbidden', 'Forbidden', 403, 403);
};
