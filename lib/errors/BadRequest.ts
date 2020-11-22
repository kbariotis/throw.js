import ExtendableError from "../CustomError";

export default class BadRequest extends ExtendableError {
  constructor(
    message: string = "Bad Request",
    errorCode: number = 400,
    originalError?: Error
  ) {
    super(message, 400, errorCode, originalError);
  }
}
