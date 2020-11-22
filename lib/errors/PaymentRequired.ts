import ExtendableError from "../CustomError";

export default class PaymentRequired extends ExtendableError {
  constructor(
    message: string = "Payment Required",
    errorCode: number = 402,
    originalError?: Error
  ) {
    super(message, 402, errorCode, originalError);
  }
}
