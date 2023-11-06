import { container } from "tsyringe";
import ErrorHandle from "../../erros/ErrorHandle";
import FindCursoByIdUseCase from "../../../application/useCases/curso/findCursoById/FindCursoByIdUseCase";
import { IHttpRequest, IHttpResponse } from "../../protocols/http";
import FindCursoDisciplinaByCursoIdUseCase from "../../../application/useCases/curso/findCursoDisciplinaByCursoIdUseCase.ts/FindCursoDisciplinaByCursoIdUseCase";

class FindCursoDisciplinaByCursoIdController {
  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    const findCursoByIdUseCase = container.resolve(FindCursoByIdUseCase);
    const findCursoDisciplinaByCursoId = container.resolve(FindCursoDisciplinaByCursoIdUseCase);
    try {
      const id = request.params.id;

      await findCursoByIdUseCase.execute(Number(id));

      const cursoDisciplina = await findCursoDisciplinaByCursoId.execute(Number(id));

      const resolve = {
        response: cursoDisciplina,
        error: null,
      };
      return { statusCode: 200, data: resolve };
    } catch (error) {
      console.log(error, "error");
      return ErrorHandle(error);
    }
  }
}
export default FindCursoDisciplinaByCursoIdController;
