import ExtendableError from "../CustomError";

export default class NotAcceptable extends ExtendableError {
  constructor(message: string = "Not Acceptable", errorCode: number = 406) {
    super(message, 406, errorCode);
  }
}
