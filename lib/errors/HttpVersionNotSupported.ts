import { CustomError } from "../CustomError";

export class HttpVersionNotSupported extends CustomError {
  constructor(
    message: string = "HTTP Version Not Supported",
    errorCode: number = 505,
    originalError?: Error
  ) {
    super(message, 505, errorCode, originalError);
  }
}
