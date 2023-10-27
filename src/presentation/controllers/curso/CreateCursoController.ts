import { container } from "tsyringe";
import CreateCursoUsecase from "../../../application/useCases/curso/createCurso/CreateCursoUseCase";
import ErrorHandle from "../../erros/ErrorHandle";
import { IHttpRequest, IHttpResponse } from "../../protocols/http";

class CreateCursoController {
  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    const createCursoUseCase = container.resolve(CreateCursoUsecase);
    try {
      const { nome, id_departamento } = request.body;

      const curso = await createCursoUseCase.execute({ nome, id_departamento });

      return { statusCode: 201, data: { response: curso, error: null } };
    } catch (error) {
      console.log("error", error);
      return ErrorHandle(error);
    }
  }
}

export default CreateCursoController;
