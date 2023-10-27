import DeleteDisciplinaUseCase from "../../../application/useCases/disciplina/deleteDisciplina/DeleteDisciplinaUseCase";
import { container } from "tsyringe";
import ErrorHandle from "../../erros/ErrorHandle";
import { IHttpRequest, IHttpResponse } from "../../protocols/http";

class DeleteDisciplinaController {
  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    const { id } = request.body;
    const deleteDisciplinaUseCase = container.resolve(DeleteDisciplinaUseCase);
    try {
      await deleteDisciplinaUseCase.execute(id);
      return { statusCode: 204, data: {} };
    } catch (error) {
      return ErrorHandle(error);
    }
  }
}

export default DeleteDisciplinaController;
