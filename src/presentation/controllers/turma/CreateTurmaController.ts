import { container } from "tsyringe";
import CreateTurmaoUsecase from "../../../application/useCases/turma/createTurma/CreateTurmaUseCase";
import ErrorHandle from "../../erros/ErrorHandle";
import { IHttpRequest, IHttpResponse } from "../../protocols/http";

class CreateTurmaController {
  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    const createTurmaUseCase = container.resolve(CreateTurmaoUsecase);

    try {
      const { nome, id_curso } = request.body;
      const turma = await createTurmaUseCase.execute({ nome, id_curso });

      return { statusCode: 201, data: { response: turma, error: null } };
    } catch (error) {
      return ErrorHandle(error);
    }
  }
}

export default CreateTurmaController;
