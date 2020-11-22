import ExtendableError from "../CustomError";

export default class GatewayTimeout extends ExtendableError {
  constructor(message: string = "Gateway Timeout", errorCode: number = 504) {
    super(message, 504, errorCode);
  }
}
