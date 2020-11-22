import ExtendableError from "../CustomError";

export default class ProxyAuthenticationRequired extends ExtendableError {
  constructor(
    message: string = "Proxy Authentication Required",
    errorCode: number = 407
  ) {
    super(message, 407, errorCode);
  }
}
