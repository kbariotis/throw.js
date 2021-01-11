import { CustomError } from "../CustomError";

export class Conflict extends CustomError {
  constructor(
    message: string = "Conflict",
    errorCode: number = 409,
    originalError?: Error
  ) {
    super(message, 409, errorCode, originalError);
  }
}
