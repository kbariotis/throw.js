export default class ExtendableError extends Error {
  errorCode: number;
  statusCode: number;

  constructor(
    message: string,
    statusCode: number = 400,
    errorCode: number = 400
  ) {
    super(message);

    this.name = this.constructor.name;
    this.message = message;
    this.statusCode = statusCode;
    this.errorCode = errorCode;

    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error(message).stack;
    }
  }
}
