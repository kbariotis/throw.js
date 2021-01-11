import { CustomError } from "../CustomError";

export class BadGateway extends CustomError {
  constructor(
    message: string = "Bad Gateway",
    errorCode: number = 502,
    originalError?: Error
  ) {
    super(message, 502, errorCode, originalError);
  }
}
