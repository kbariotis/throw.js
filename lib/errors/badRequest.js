/**
 * @module errors/badRequest
 */

'use strict';

var customError = require('../custom-error');

module.exports = function () {
  return new customError('badRequest', 'Bad Request', 502, 502);
};
