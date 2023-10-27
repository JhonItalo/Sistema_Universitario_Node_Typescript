import { container } from "tsyringe";

import DeleteCursoUseCase from "../../../application/useCases/curso/deleteCurso/DeleteCursoUseCase";
import ErrorHandle from "../../erros/ErrorHandle";
import { IHttpRequest, IHttpResponse } from "../../protocols/http";

class DeleteCursoController {
  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    const deleteCursoUseCase = container.resolve(DeleteCursoUseCase);

    const { id } = request.body;

    await deleteCursoUseCase.execute(id);

    return { statusCode: 204, data: {} };
  }
}
export default DeleteCursoController;
