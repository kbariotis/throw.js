import ExtendableError from "../CustomError";

export default class RequestTimeout extends ExtendableError {
  constructor(
    message: string = "Request Timeout",
    errorCode: number = 408,
    originalError?: Error
  ) {
    super(message, 408, errorCode, originalError);
  }
}
