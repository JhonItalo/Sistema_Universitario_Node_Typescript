import { container } from "tsyringe";
import FindByCpfUseCase from "../../../application/useCases/aluno/findAlunoByCpf/FindAlunoByCpfUseCase";
import ErrorHandle from "../../erros/ErrorHandle";
import { IHttpRequest, IHttpResponse } from "../../protocols/http";

class FindAlunoByCpfController {
  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    const findAlunoByCpfUseCase = container.resolve(FindByCpfUseCase);
    try {
      const cpf = request.params.cpf;

      const aluno = await findAlunoByCpfUseCase.execute(cpf);

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

export default FindAlunoByCpfController;
