import ExtendableError from "../CustomError";

export default class Gone extends ExtendableError {
  constructor(
    message: string = "Gone",
    errorCode: number = 410,
    originalError?: Error
  ) {
    super(message, 410, errorCode, originalError);
  }
}
