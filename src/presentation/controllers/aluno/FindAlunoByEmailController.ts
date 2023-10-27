import { container } from "tsyringe";
import ErrorHandle from "../../erros/ErrorHandle";
import FindAlunoByEmailUseCase from "../../../application/useCases/aluno/findAlunoByEmail/FindAlunoByEmailUseCase";
import { IHttpRequest, IHttpResponse } from "../../protocols/http";

class FindAlunoByEmailController {
  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    const findAlunoByEmailUseCase = container.resolve(FindAlunoByEmailUseCase);
    try {
      const email = request.params.email;

      const aluno = await findAlunoByEmailUseCase.execute(email);

      const resolve = {
        reponse: aluno,
        error: null,
      };

      return { statusCode: 200, data: resolve };
    } catch (error) {
      return ErrorHandle(error);
    }
  }
}

export default FindAlunoByEmailController;
