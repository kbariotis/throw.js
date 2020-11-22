import ExtendableError from "../CustomError";

export default class InternalServerError extends ExtendableError {
  constructor(
    message: string = "Internal Server Error",
    errorCode: number = 500
  ) {
    super(message, 500, errorCode);
  }
}
