import ExtendableError from "../CustomError";

export default class NotFound extends ExtendableError {
  constructor(
    message: string = "Not Found",
    errorCode: number = 404,
    originalError?: Error
  ) {
    super(message, 404, errorCode, originalError);
  }
}
