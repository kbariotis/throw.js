import { CustomError } from "../CustomError";

export class FailedDependency extends CustomError {
  constructor(
    message: string = "Failed Dependency",
    errorCode: number = 424,
    originalError?: Error
  ) {
    super(message, 424, errorCode, originalError);
  }
}
