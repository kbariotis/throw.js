import ExtendableError from "../CustomError";

export default class Conflict extends ExtendableError {
  constructor(
    message: string = "Conflict",
    errorCode: number = 409,
    originalError?: Error
  ) {
    super(message, 409, errorCode, originalError);
  }
}
