/**
 * @module errors/badGateway
 */

'use strict';

var customError = require('../custom-error');

module.exports = function () {
  return new customError('badGateway', 'Bad Gateway', 502, 502);
};
