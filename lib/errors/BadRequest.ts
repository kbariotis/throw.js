import { CustomError } from "../CustomError";

export class BadRequest extends CustomError {
  constructor(
    message: string = "Bad Request",
    errorCode: number = 400,
    originalError?: Error
  ) {
    super(message, 400, errorCode, originalError);
  }
}
