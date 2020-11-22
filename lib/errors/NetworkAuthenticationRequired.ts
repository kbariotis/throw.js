import ExtendableError from "../CustomError";

export default class NetworkAuthenticationRequired extends ExtendableError {
  constructor(
    message: string = "Network Authentication Required",
    errorCode: number = 511
  ) {
    super(message, 511, errorCode);
  }
}
