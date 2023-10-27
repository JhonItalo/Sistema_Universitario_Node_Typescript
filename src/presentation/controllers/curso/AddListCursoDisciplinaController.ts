import { container } from "tsyringe";
import ErrorHandle from "../../erros/ErrorHandle";
import FindCursoByIdUseCase from "../../../application/useCases/curso/findCursoById/FindCursoByIdUseCase";
import { IHttpRequest, IHttpResponse } from "../../protocols/http";
import AddListCursoDisciplinaUseCase from "../../../application/useCases/cursoDisciplina/addListCursoDisciplina/AddListCursoDisciplinaUseCase";

class AddListCursoDisciplinaController {
  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    const findCursoByIdUseCase = container.resolve(FindCursoByIdUseCase);
    const addListCursoDisciplinaUseCase = container.resolve(AddListCursoDisciplinaUseCase);
    try {
      const { id, disciplina } = request.body;

      await findCursoByIdUseCase.execute(id);

      const cursoDisciplina = await addListCursoDisciplinaUseCase.execute(id, disciplina);
      const resolve = {
        response: cursoDisciplina,
        error: null,
      };

      return { statusCode: 201, data: resolve };
    } catch (error) {
      return ErrorHandle(error);
    }
  }
}
export default AddListCursoDisciplinaController;
