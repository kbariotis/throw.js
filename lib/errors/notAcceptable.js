/**
 * @module errors/notAcceptable
 */

'use strict';

var customError = require('../custom-error');

module.exports = function () {
  return new customError('notAcceptable', 'Not Acceptable', 406, 406);
};
