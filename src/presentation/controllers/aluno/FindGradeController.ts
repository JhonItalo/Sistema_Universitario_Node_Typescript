import { container } from "tsyringe";
import FindGradeByAlunoIdUseCase from "../../../application/useCases/aluno/findAlunoProfessorCursoDisciplinaByAlunoId/FindAlunoProfessorCursoDisciplinaByAlunoIdUseCase";
import ErrorHandle from "../../erros/ErrorHandle";
import FindAlunoByIdUseCase from "../../../application/useCases/aluno/findAlunoById/FindALunoByIdUseCase";
import { IHttpRequest, IHttpResponse } from "../../protocols/http";

class FindGradeController {
  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    const findAlunoByIdUseCase = container.resolve(FindAlunoByIdUseCase);

    const findAlunoProfessorCursoDisciplinaByAlunoIdUseCase =
      container.resolve(FindGradeByAlunoIdUseCase);

    try {
      const { id } = request.params;
      await findAlunoByIdUseCase.execute(id);

      const grade = await findAlunoProfessorCursoDisciplinaByAlunoIdUseCase.execute(id);

      return { statusCode: 200, data: { resolve: grade, error: null } };
    } catch (error) {
      console.log("error", error);
      return ErrorHandle(error);
    }
  }
}

export default FindGradeController;
