import { container } from "tsyringe";
import ErrorHandle from "../../erros/ErrorHandle";
import { IHttpRequest, IHttpResponse } from "../../protocols/http";
import FindProfessorByCpfUseCase from "../../../modules/professor/application/useCases/findProfessorByCpf.useCase.ts/findProfessorByCpf.useCase";

class FindProfessorByCpfController {
  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    const findProfessorByCpfUseCase = container.resolve(FindProfessorByCpfUseCase);
    try {
      const { cpf } = request.params;
      const professor = await findProfessorByCpfUseCase.execute(cpf);

      const resolve = {
        reponse: professor,
        error: null,
      };

      return { statusCode: 200, data: resolve };
    } catch (error) {
      return ErrorHandle(error);
    }
  }
}

export default FindProfessorByCpfController;
