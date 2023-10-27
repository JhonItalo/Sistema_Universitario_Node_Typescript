import ListAlunoUseCase from "../../../application/useCases/aluno/list/ListAlunoUseCase";
import { container } from "tsyringe";
import ErrorHandle from "../../erros/ErrorHandle";
import { IHttpRequest, IHttpResponse } from "../../protocols/http";

class ListAlunoController {
  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    const listAlunoUseCase = container.resolve(ListAlunoUseCase);

    try {
      const list = await listAlunoUseCase.execute();

      return { statusCode: 200, data: { response: list, error: null } };
    } catch (error) {
      return ErrorHandle(error);
    }
  }
}

export default ListAlunoController;
