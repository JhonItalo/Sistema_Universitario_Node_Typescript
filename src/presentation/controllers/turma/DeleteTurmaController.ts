import { container } from "tsyringe";
import DeleteTurmaUseCase from "../../../application/useCases/turma/deleteTurma/DeleteTurmaUseCase";
import ErrorHandle from "../../erros/ErrorHandle";
import { IHttpRequest, IHttpResponse } from "../../protocols/http";

class DeleteTurmaController {
  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    const { id } = request.body;
    const deleteTurmaUseCase = container.resolve(DeleteTurmaUseCase);
    try {
      await deleteTurmaUseCase.execute(id);

      return { statusCode: 204, data: { response: {}, error: null } };
    } catch (error) {
      return ErrorHandle(error);
    }
  }
}
export default DeleteTurmaController;
