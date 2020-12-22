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
    const jsonStructure: {
      message: string;
      statusCode: number;
      errorCode: number;
      name: string;
      stack?: string;
      originalError?: {
        message: string;
        name: string;
        stack?: string;
      };
    } = {
      message: this.message,
      statusCode: this.statusCode,
      errorCode: this.errorCode,
      name: this.name,
      stack: this.stack,
    };

    if (this.originalError) {
      jsonStructure.originalError = {
        name: this.originalError.name,
        message: this.originalError.message,
        stack: this.originalError.stack,
      };
    }

    return jsonStructure;
  }
}
