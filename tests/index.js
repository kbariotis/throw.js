var assert = require('assert');
var CustomError = require('../lib/custom-error');

/**
 * @test lib/custom-errors
 */
function doSomethingBad() {
  throw new CustomError('customError', 'It went bad!', 42, 42);
}

try {

  doSomethingBad();

} catch (err) {

  // The name property should be set to the error's name
  assert(err.name = 'CustomError');

  // The error should be an instance of its class
  assert(err instanceof CustomError);

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
  assert.strictEqual(err.errorCode, 42);

  // The customer error code should have been set
  assert.strictEqual(err.internalErrorCode, 42);
}

var badGateway = require('../lib/errors/badGateway');

/**
 * @test lib/errors/badGateway
 */
function doSomethingMoreBad() {
  throw badGateway();
}

try {

  doSomethingMoreBad();

} catch (err) {

  // The name property should be set to the error's name
  assert(err.name = 'badRequest');

  // The error should be an instance of its class
  assert(err instanceof CustomError);

  // The error should be an instance of builtin Error
  assert(err instanceof Error);

  // The error should be recognized by Node.js' util#isError
  assert(require('util').isError(err));

  // The error should have recorded a stack
  assert(err.stack);

  // toString should return the default error message formatting
  assert.strictEqual(err.toString(),
    'badRequest: Bad Gateway');

  // The stack should start with the default error message formatting
  assert.strictEqual(err.stack.split('\n')[0],
    'badRequest: Bad Gateway');

  // The first stack frame should be the function where the error was thrown.
  assert.strictEqual(err.stack.split('\n')[2].indexOf('doSomethingMoreBad'), 7);

  // The response error code should have been set
  assert.strictEqual(err.errorCode, 502);

  // The customer error code should have been set
  assert.strictEqual(err.internalErrorCode, 502);
}
