import { CustomError } from "../CustomError";

export class NetworkAuthenticationRequired extends CustomError {
  constructor(
    message: string = "Network Authentication Required",
    errorCode: number = 511,
    originalError?: Error
  ) {
    super(message, 511, errorCode, originalError);
  }
}
