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

  toJSON() {
    const jsonStructure = {
      message: this.message,
      statusCode: this.statusCode,
      errorCode: this.errorCode,
      name: this.name,
      stacktrace: this.stack,
      originalError: {},
    };

    if (this.originalError) {
      if ("toJSON" in this.originalError) {
        jsonStructure.originalError = (this.originalError as any).toJSON();
      } else {
        jsonStructure.originalError = {
          name: this.originalError.name,
          message: this.originalError.message,
          stacktrace: this.originalError.stack,
        };
      }
    }

    return jsonStructure;
  }
}
