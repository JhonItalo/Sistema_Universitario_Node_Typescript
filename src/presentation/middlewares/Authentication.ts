import { Response, Request, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { container } from "tsyringe";
import UnauthorizedError from "../erros/UnauthorizedError";
import ErrorHandle from "../erros/ErrorHandle";
import FindUserByStatusIdUseCase from "../../application/useCases/user/findUserByStatusId/FindUserByStatusId";

interface ICustomRequest extends Request {
  customUser: {
    status_id: string;
    status: string | number;
  };
}
interface IJwt {
  sub: string;
}

const Authentication = (allowedUsers: string[]) => {
  return async (request: ICustomRequest, response: Response, next: NextFunction) => {
    const findUserByStatusId = container.resolve(FindUserByStatusIdUseCase);

    try {
      const authHeader = request.headers.authorization;

      const [, token] = authHeader.split(" ");

      if (!token) {
        throw new UnauthorizedError("Token não fornecido");
      }

      let user_status_id: string;

      try {
        const { sub } = verify(token, process.env.SC_KEY) as IJwt;

        user_status_id = sub;
      } catch (error) {
        throw new UnauthorizedError("Falha na autenticação");
      }

      const user = await findUserByStatusId.execute(user_status_id);

      if (!user) {
        throw new UnauthorizedError("Falha na autenticação");
      }

      if (allowedUsers.indexOf(user.status) !== -1) {
        request.customUser = { status_id: user_status_id, status: user.status };

        next();
      } else {
        throw new UnauthorizedError("Falha na autenticação");
      }
    } catch (error) {
      const { statusCode, data } = ErrorHandle(error);
      return response.status(statusCode).json(data);
    }
  };
};

export default Authentication;
