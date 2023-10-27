import { container } from "tsyringe";
import FindProfessorCursoDisciplinaByProfessorIdUsecase from "../../../application/useCases/professorCursoDisciplina/findProfessorCursoDisciplinaByProfessorId/FindProfessorCursoDisciplinaByProfessorIdUsecase";
import ErrorHandle from "../../erros/ErrorHandle";
import FindProfessorByIdUseCase from "../../../application/useCases/professor/findProfessorById/FindByIdProfessorUseCase";
import { IHttpRequest, IHttpResponse } from "../../protocols/http";

class FindProfessorCursoDisciplinaByProfessorIdController {
  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    const findProfessorByIdUseCase = container.resolve(FindProfessorByIdUseCase);

    const findProfessorCursoDisciplinaByProfessorIdUsecase = container.resolve(
      FindProfessorCursoDisciplinaByProfessorIdUsecase
    );

    try {
      const id_professor = request.params.id;

      await findProfessorByIdUseCase.execute(id_professor);

      const cursoDisciplina = await findProfessorCursoDisciplinaByProfessorIdUsecase.execute(
        id_professor
      );

      const resolve = {
        response: cursoDisciplina,
        error: null,
      };
      return { statusCode: 200, data: resolve };
    } catch (error) {
      return ErrorHandle(error);
    }
  }
}

export default FindProfessorCursoDisciplinaByProfessorIdController;
