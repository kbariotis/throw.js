/**
 * @test lib/errors/BadGateway
 */

var assert = require('assert'),
  errors = require('../lib');

function doSomethingMoreBad() {
  throw new errors.BadGateway();
}

try {

  doSomethingMoreBad();

} catch (err) {

  // The name property should be set to the error's name
  assert(err.name = 'BadGateway');

  // The error should be an instance of its class
  assert(err instanceof errors.BadGateway);

  // The error should be an instance of builtin Error
  assert(err instanceof Error);

  // The error should be recognized by Node.js' util#isError
  assert(require('util').isError(err));

  // The error should have recorded a stack
  assert(err.stack);

  // toString should return the default error message formatting
  assert.strictEqual(err.toString(),
    'BadGateway: Bad Gateway');

  // The stack should start with the default error message formatting
  assert.strictEqual(err.stack.split('\n')[0],
    'BadGateway: Bad Gateway');

  // The first stack frame should be the function where the error was thrown.
  assert.strictEqual(err.stack.split('\n')[1].indexOf('doSomethingMoreBad'), 7);

  // The response error code should have been set
  assert.strictEqual(err.statusCode, 502);

  // The customer error code should have been set
  assert.strictEqual(err.errorCode, 502);
}

