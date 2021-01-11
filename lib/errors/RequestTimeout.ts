import { CustomError } from "../CustomError";

export class RequestTimeout extends CustomError {
  constructor(
    message: string = "Request Timeout",
    errorCode: number = 408,
    originalError?: Error
  ) {
    super(message, 408, errorCode, originalError);
  }
}
