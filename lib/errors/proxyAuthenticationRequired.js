/**
 * @module errors/proxyAuthenticationRequired
 */

'use strict';

var customError = require('../custom-error');

module.exports = function () {
  return new customError('proxyAuthenticationRequired', 'Proxy Authentication Required', 407, 407);
};
