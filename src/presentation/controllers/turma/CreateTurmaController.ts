import { container } from "tsyringe";
import ErrorHandle from "../../erros/ErrorHandle";
import { IHttpRequest, IHttpResponse } from "../../protocols/http";
import CreateTurmaoUsecase from "../../../modules/turma/application/useCases/createTurma/createTurma.useCase";

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
