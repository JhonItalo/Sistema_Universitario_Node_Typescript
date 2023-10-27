import CreateDisciplinaUsecase from "../../../application/useCases/disciplina/createDisciplina/CreateDisciplinaUseCase";
import { container } from "tsyringe";
import ErrorHandle from "../../erros/ErrorHandle";
import { IHttpRequest, IHttpResponse } from "../../protocols/http";

class CreateDisciplinaController {
  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    const { nome, carga_horaria } = request.body;
    const createDisciplinaUsecase = container.resolve(CreateDisciplinaUsecase);
    try {
      const disciplina = await createDisciplinaUsecase.execute({ nome, carga_horaria });

      return { statusCode: 201, data: { response: disciplina, error: null } };
      
    } catch (error) {
      console.log("error", error);
      return ErrorHandle(error);
    }
  }
}

export default CreateDisciplinaController;
