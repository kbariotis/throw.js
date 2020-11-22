import ExtendableError from "../CustomError";

export default class Unauthorized extends ExtendableError {
  constructor(
    message: string = "Unauthorized",
    errorCode: number = 401,
    originalError?: Error
  ) {
    super(message, 401, errorCode, originalError);
  }
}
