/**
 * @module errors/index
 * @description Errors Bootstrap
 */

'use strict';

var fs = require('fs'),
  errors = fs.readdirSync(__dirname + '/errors');

errors.forEach(function(el){

  var n = el.substring(0, el.length-3);

  module.exports[n] = require('./errors/' + el);

});

module.exports.customError = require('./customError');
