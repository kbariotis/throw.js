/**
 * @module errors/httpVersionNotSupported
 */

'use strict';

var customError = require('../custom-error');

module.exports = function () {
  return new customError('httpVersionNotSupported', 'HTTP Version Not Supported', 505, 505);
};
