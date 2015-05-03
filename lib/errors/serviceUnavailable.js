/**
 * @module errors/serviceUnavailable
 */

'use strict';

var customError = require('../custom-error');

module.exports = function () {
  return new customError('serviceUnavailable', 'Service Unavailable', 503, 503);
};
