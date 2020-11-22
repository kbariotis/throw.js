import ExtendableError from "../CustomError";

export default class BadGateway extends ExtendableError {
  constructor(
    message: string = "Bad Gateway",
    errorCode: number = 502,
    originalError?: Error
  ) {
    super(message, 502, errorCode, originalError);
  }
}
