import { CustomError } from "../CustomError";

export class NotFound extends CustomError {
  constructor(
    message: string = "Not Found",
    errorCode: number = 404,
    originalError?: Error
  ) {
    super(message, 404, errorCode, originalError);
  }
}
