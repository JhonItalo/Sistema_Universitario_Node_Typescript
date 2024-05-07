import { IHttpResponse } from "../protocols/http";
import DataConflictError from "./DataConflictError";
import DataNotFoundError from "./DataNotFoundError";
import ForbiddenError from "./ForbiddenError";
import UnauthorizedError from "./UnauthorizedError";
import ValidationError from "./ValidationError";

interface IResolve {
  response: null;
  error: string;
}

const resolve = (message: string): IResolve => {
  return {
    response: null,
    error: message,
  };
};

const ErrorHandle = (error: Error): IHttpResponse => {
  if (error instanceof DataConflictError) {
    return { statusCode: 409, data: resolve(error.message) };
  }
  if (error instanceof DataNotFoundError) {
    return { statusCode: 404, data: resolve(error.message) };
  }
  if (error instanceof ForbiddenError) {
    return { statusCode: 403, data: resolve(error.message) };
  }
  if (error instanceof UnauthorizedError) {
    return { statusCode: 401, data: resolve(error.message) };
  }
  if (error instanceof ValidationError) {
    return { statusCode: 400, data: resolve(error.message) };
  }

  return { statusCode: 400, data: resolve("Requisição inválida") };
};

export default ErrorHandle;
