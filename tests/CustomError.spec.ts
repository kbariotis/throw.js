import * as assert from "assert";
import CustomError from "../lib/CustomError";

function doSomethingBad() {
  const originalError = new Error("Original error");
  throw new CustomError("It went bad!", 400, 4000, originalError);
}

try {
  doSomethingBad();
} catch (err) {
  // The name property should be set to the error's name
  assert((err.name = "CustomError"));

  // The error should be an instance of its class
  assert(err instanceof CustomError);

  // The error should be an instance of builtin Error
  assert(err instanceof Error);

  assert(err.originalError instanceof Error);

  // The error should be recognized by Node.js' util#isError
  assert(require("util").isError(err));

  // The error should have recorded a stack
  assert(err.stack);

  // toString should return the default error message formatting
  assert.strictEqual(err.toString(), "CustomError: It went bad!");

  // The stack should start with the default error message formatting
  assert.strictEqual(err.stack.split("\n")[0], "CustomError: It went bad!");

  // The first stack frame should be the function where the error was thrown.
  assert.strictEqual(err.stack.split("\n")[1].indexOf("doSomethingBad"), 7);

  // The response error code should have been set
  assert.strictEqual(err.statusCode, 400);

  // Serializes JSON structure
  assert.strictEqual(err.errorCode, 4000);
  assert.strictEqual(err.toJSON().message, "It went bad!");
  assert.strictEqual(err.toJSON().statusCode, 400);
  assert.strictEqual(err.toJSON().errorCode, 4000);
  assert.strictEqual(err.toJSON().name, "CustomError");
  assert.notStrictEqual(err.toJSON().originalError, undefined);
  assert.notStrictEqual(err.toJSON().stack, undefined);
}
