import ListDisciplinaUsecase from "../../../application/useCases/disciplina/list/ListDisciplinaUseCase";
import { container } from "tsyringe";
import ErrorHandle from "../../erros/ErrorHandle";
import { IHttpRequest, IHttpResponse } from "../../protocols/http";

class ListDisciplinaController {
  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    const listDisciplinaUseCase = container.resolve(ListDisciplinaUsecase);
    try {
      const cursos = await listDisciplinaUseCase.execute();

      return { statusCode: 200, data: { response: cursos, error: null } };
    } catch (error) {
      return ErrorHandle(error);
    }
  }
}
export default ListDisciplinaController;
