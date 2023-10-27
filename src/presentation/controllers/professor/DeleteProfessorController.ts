import { container } from "tsyringe";
import DeleteProfessorUseCase from "../../../application/useCases/professor/deleteProfessor/DeleteProfessorUseCase";

import ErrorHandle from "../../erros/ErrorHandle";
import { IHttpRequest, IHttpResponse } from "../../protocols/http";

class DeleteProfessorController {
  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    const deleteProfessorUsecase = container.resolve(DeleteProfessorUseCase);
    try {
      const { id } = request.body;
      await deleteProfessorUsecase.execute(id);
      return { statusCode: 204, data: {} };
    } catch (error) {
      return ErrorHandle(error);
    }
  }
}
export default DeleteProfessorController;
