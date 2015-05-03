/**
 * @module errors/paymentRequired
 */

'use strict';

var customError = require('../custom-error');

module.exports = function () {
  return new customError('paymentRequired', 'Payment Required', 402, 402);
};
