export default class CustomError extends Error {
  errorCode: number;
  statusCode: number;
  originalError?: Error;

  constructor(
    message: string,
    statusCode: number = 400,
    errorCode: number = 400,
    originalError?: Error
  ) {
    super(message);

    this.name = this.constructor.name;
    this.message = message;
    this.statusCode = statusCode;
    this.errorCode = errorCode;
    this.originalError = originalError;

    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error(message).stack;
    }
  }
}
