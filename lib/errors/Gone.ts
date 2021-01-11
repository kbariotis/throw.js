import { CustomError } from "../CustomError";

export class Gone extends CustomError {
  constructor(
    message: string = "Gone",
    errorCode: number = 410,
    originalError?: Error
  ) {
    super(message, 410, errorCode, originalError);
  }
}
