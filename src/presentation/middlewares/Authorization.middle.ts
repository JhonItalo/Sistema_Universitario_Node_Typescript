import { Request, Response, NextFunction } from "express";
import ErrorHandle from "../erros/ErrorHandle";
import ForbiddenError from "../erros/ForbiddenError";

interface CustomRequest extends Request {
  customUser: {
    status_id: string;
    status: string;
  };
}

const Authorization = () => {
  return async (request: CustomRequest, response: Response, next: NextFunction) => {
    try {
      const { status_id, status } = request.customUser;

      if (status === "aluno") {
        if (status_id !== request.body.id && status_id !== request.params.id) {
          throw new ForbiddenError("Sem permissão");
        }
      }

      if (status === "professor") {
        if (status_id !== request.body.id && status_id !== request.params.id) {
          throw new ForbiddenError("Sem permissão");
        }
      }
      next();
    } catch (error) {
      const { statusCode, data } = ErrorHandle(error);

      return response.status(statusCode).json(data);
    }
  };
};

export default Authorization;
