import UpdateCursoUseCase from "../../../application/useCases/curso/updateCurso/UpdateCursoUseCase";
import { container } from "tsyringe";
import ErrorHandle from "../../erros/ErrorHandle";
import { IHttpRequest, IHttpResponse } from "../../protocols/http";

class UpdateCursoController {
  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    const updateCursoUseCase = container.resolve(UpdateCursoUseCase);
    try {
      const { id, nome, id_departamento } = request.body;

      const update = await updateCursoUseCase.execute({ id, nome, id_departamento });

      return { statusCode: 200, data: { response: update, error: null } };
    } catch (error) {
      return ErrorHandle(error);
    }
  }
}
export default UpdateCursoController;
