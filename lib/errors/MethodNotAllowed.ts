import ExtendableError from "../CustomError";

export default class MethodNotAllowed extends ExtendableError {
  constructor(message: string = "Method Not Allowed", errorCode: number = 405) {
    super(message, 405, errorCode);
  }
}
