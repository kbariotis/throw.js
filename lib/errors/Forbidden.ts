import ExtendableError from "../CustomError";

export default class Forbidden extends ExtendableError {
  constructor(message: string = "Forbiden", errorCode: number = 403) {
    super(message, 403, errorCode);
  }
}
