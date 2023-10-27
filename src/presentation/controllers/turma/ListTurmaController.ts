import ListTurmaUsecase from "../../../application/useCases/turma/list/ListTurmaUseCase";
import { container } from "tsyringe";
import ErrorHandle from "../../erros/ErrorHandle";
import { IHttpRequest, IHttpResponse } from "../../protocols/http";

class ListTurmaController {
  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    const listTurmaUseCase = container.resolve(ListTurmaUsecase);
    try {
      const turma = await listTurmaUseCase.execute();

      return { statusCode: 200, data: { response: turma, error: null } };
    } catch (error) {
      return ErrorHandle(error);
    }
  }
}
export default ListTurmaController;
