import { CustomError } from "../CustomError";

export class Unauthorized extends CustomError {
  constructor(
    message: string = "Unauthorized",
    errorCode: number = 401,
    originalError?: Error
  ) {
    super(message, 401, errorCode, originalError);
  }
}
