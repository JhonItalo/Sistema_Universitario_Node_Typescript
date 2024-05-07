import { container } from "tsyringe";
import ErrorHandle from "../../erros/ErrorHandle";
import { IHttpRequest, IHttpResponse } from "../../protocols/http";
import UpdateTurmaUseCase from "../../../modules/turma/application/useCases/updateTurma/updateTurma.useCase";

class UpdateTurmaController {
  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    const updateTurmaUseCase = container.resolve(UpdateTurmaUseCase);

    try {
      const { id, nome, id_curso } = request.body;

      const update = await updateTurmaUseCase.execute({ id, nome, id_curso });

      return { statusCode: 200, data: { response: update, error: null } };
    } catch (error) {
      return ErrorHandle(error);
    }
  }
}
export default UpdateTurmaController;
