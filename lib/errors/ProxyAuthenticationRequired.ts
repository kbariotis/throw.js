import ExtendableError from "../CustomError";

export default class ProxyAuthenticationRequired extends ExtendableError {
  constructor(
    message: string = "Proxy Authentication Required",
    errorCode: number = 407,
    originalError?: Error
  ) {
    super(message, 407, errorCode, originalError);
  }
}
