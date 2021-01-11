import { CustomError } from "../CustomError";

export class NotAcceptable extends CustomError {
  constructor(
    message: string = "Not Acceptable",
    errorCode: number = 406,
    originalError?: Error
  ) {
    super(message, 406, errorCode, originalError);
  }
}
