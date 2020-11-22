import ExtendableError from "../CustomError";

export default class HttpVersionNotSupported extends ExtendableError {
  constructor(
    message: string = "HTTP Version Not Supported",
    errorCode: number = 505
  ) {
    super(message, 505, errorCode);
  }
}
