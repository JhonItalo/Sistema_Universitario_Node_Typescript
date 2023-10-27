import { container } from "tsyringe";
import ErrorHandle from "../../erros/ErrorHandle";
import FindProfessorByIdUseCase from "../../../application/useCases/professor/findProfessorById/FindByIdProfessorUseCase";
import { IHttpRequest, IHttpResponse } from "../../protocols/http";
import AddListProfessorCursoDisciplinaUseCase from "../../../application/useCases/professorCursoDisciplina/addListProfessorCursoDisciplina/AddListProfessorCursoDisciplinaUseCase";

class AddListProfessorCursoDisciplinaController {
  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    const findProfessorByIdUseCase = container.resolve(FindProfessorByIdUseCase);
    const addListProfessorCursoDisciplinaUseCase = container.resolve(
      AddListProfessorCursoDisciplinaUseCase
    );
    try {
      const { id, cursoDisciplina } = request.body;

      await findProfessorByIdUseCase.execute(id);

      const professoCursoDisciplina = await addListProfessorCursoDisciplinaUseCase.execute(
        id,
        cursoDisciplina
      );

      const resolve = {
        response: professoCursoDisciplina,
        error: null,
      };

      return { statusCode: 201, data: resolve };
    } catch (error) {
      return ErrorHandle(error);
    }
  }
}
export default AddListProfessorCursoDisciplinaController;
