import { container } from "tsyringe";
import DeleteAlunoUseCase from "../../../application/useCases/aluno/deleteAluno/DeleteAlunoUseCase";
import ErrorHandle from "../../erros/ErrorHandle";
import { IHttpRequest, IHttpResponse } from "../../protocols/http";

class DeleteAlunoController {
  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    const deleteAlunoUsecase = container.resolve(DeleteAlunoUseCase);
    try {
      const { id } = request.body;
      await deleteAlunoUsecase.execute(id);
      return { statusCode: 204, data: {} };
    } catch (error) {
      return ErrorHandle(error);
    }
  }
}
export default DeleteAlunoController;
