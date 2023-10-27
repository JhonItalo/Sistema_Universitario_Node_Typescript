import AuthUserUseCase from "../../../application/useCases/user/auth/AuthUserUseCase";
import { container } from "tsyringe";
import ErrorHandle from "../../erros/ErrorHandle";
import { IHttpRequest, IHttpResponse } from "../../protocols/http";

class AuthUserControler {
  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    const authUserUseCase = container.resolve(AuthUserUseCase);

    try {
      const { email, password } = request.body;

      const token = await authUserUseCase.execute(email, password);

      const resolve = {
        response: token,
        error: null,
      };

      return { statusCode: 200, data: resolve };
    } catch (error) {
      return ErrorHandle(error);
    }
  }
}

export default AuthUserControler;
