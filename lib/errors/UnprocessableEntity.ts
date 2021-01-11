import { CustomError } from "../CustomError";

export class UnprocessableEntity extends CustomError {
  constructor(
    message: string = "Unprocessable Entity",
    errorCode: number = 422,
    originalError?: Error
  ) {
    super(message, 422, errorCode, originalError);
  }
}
