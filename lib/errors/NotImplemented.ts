import ExtendableError from "../CustomError";

export default class NotImplemented extends ExtendableError {
  constructor(message: string = "Not Implemented", errorCode: number = 501) {
    super(message, 501, errorCode);
  }
}
