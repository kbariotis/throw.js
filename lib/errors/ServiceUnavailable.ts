import ExtendableError from "../CustomError";

export default class ServiceUnavailable extends ExtendableError {
  constructor(
    message: string = "Service Unavailable",
    errorCode: number = 503
  ) {
    super(message, 503, errorCode);
  }
}
