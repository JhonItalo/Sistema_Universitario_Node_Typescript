import { container } from "tsyringe";
import ErrorHandle from "../../erros/ErrorHandle";
import FindCursoByIdUseCase from "../../../application/useCases/curso/findCursoById/FindCursoByIdUseCase";
import { IHttpRequest, IHttpResponse } from "../../protocols/http";
import FindProfessorCursoDisciplinaByCursoIdUseCase from "../../../application/useCases/professorCursoDisciplina/findProfessorCursoDisciplinaByCursoId/FindProfessorCursoDisciplinaByCursoIdUseCase";

class FindGradeByCursoIdController {
  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    const findCursoByIdUseCase = container.resolve(FindCursoByIdUseCase);
    const findProfessorCursoDisciplinaByCursoIdUseCase = container.resolve(
      FindProfessorCursoDisciplinaByCursoIdUseCase
    );
    try {
      const { id } = request.params;
      await findCursoByIdUseCase.execute(Number(id));
      const professorCursoDisciplina = await findProfessorCursoDisciplinaByCursoIdUseCase.execute(
        Number(id)
      );
      const resolve = {
        response: professorCursoDisciplina,
        error: null,
      };
      return { statusCode: 200, data: resolve };
    } catch (error) {
      console.log(error);
      return ErrorHandle(error);
    }
  }
}
export default FindGradeByCursoIdController;
