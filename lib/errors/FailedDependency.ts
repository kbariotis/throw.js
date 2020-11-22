import ExtendableError from "../CustomError";

export default class FailedDependency extends ExtendableError {
  constructor(message: string = "Failed Dependency", errorCode: number = 424) {
    super(message, 424, errorCode);
  }
}
