import ExtendableError from "../CustomError";

export default class GatewayTimeout extends ExtendableError {
  constructor(
    message: string = "Gateway Timeout",
    errorCode: number = 504,
    originalError?: Error
  ) {
    super(message, 504, errorCode, originalError);
  }
}
