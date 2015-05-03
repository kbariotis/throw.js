/**
 * @module errors/notFound
 */

'use strict';

var customError = require('../custom-error');

module.exports = function () {
  return new customError('notFound', 'The requested resource couldn\'t be found', 404, 404);
};
