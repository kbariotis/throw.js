import ExtendableError from "../CustomError";

export default class FailedDependency extends ExtendableError {
  constructor(
    message: string = "Failed Dependency",
    errorCode: number = 424,
    originalError?: Error
  ) {
    super(message, 424, errorCode, originalError);
  }
}
