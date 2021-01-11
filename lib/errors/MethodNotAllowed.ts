import { CustomError } from "../CustomError";

export class MethodNotAllowed extends CustomError {
  constructor(
    message: string = "Method Not Allowed",
    errorCode: number = 405,
    originalError?: Error
  ) {
    super(message, 405, errorCode, originalError);
  }
}
