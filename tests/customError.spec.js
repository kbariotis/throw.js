/**
 * @test lib/CustomError
 */

var assert = require('assert'),
  errors = require('../lib');

function doSomethingBad() {
  throw new errors.CustomError('CustomError', 'It went bad!', 400, 4000);
}

try {

  doSomethingBad();

} catch (err) {

  // The name property should be set to the error's name
  assert(err.name = 'CustomError');

  // The error should be an instance of its class
  assert(err instanceof errors.CustomError);

  // The error should be an instance of builtin Error
  assert(err instanceof Error);

  // The error should be recognized by Node.js' util#isError
  assert(require('util').isError(err));

  // The error should have recorded a stack
  assert(err.stack);

  // toString should return the default error message formatting
  assert.strictEqual(err.toString(),
    'CustomError: It went bad!');

  // The stack should start with the default error message formatting
  assert.strictEqual(err.stack.split('\n')[0],
    'CustomError: It went bad!');

  // The first stack frame should be the function where the error was thrown.
  assert.strictEqual(err.stack.split('\n')[1].indexOf('doSomethingBad'), 7);

  // The response error code should have been set
  assert.strictEqual(err.statusCode, 400);

  // The customer error code should have been set
  assert.strictEqual(err.errorCode, 4000);
}
