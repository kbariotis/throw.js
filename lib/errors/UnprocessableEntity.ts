import ExtendableError from "../CustomError";

export default class UnprocessableEntity extends ExtendableError {
  constructor(
    message: string = "Unprocessable Entity",
    errorCode: number = 422
  ) {
    super(message, 422, errorCode);
  }
}
