import { container } from "tsyringe";
import ErrorHandle from "../../erros/ErrorHandle";
import { IHttpRequest, IHttpResponse } from "../../protocols/http";
import FindAlunoByIdUseCase from "../../../application/useCases/aluno/findAlunoById/FindALunoByIdUseCase";
import ChangeDisciplinaUseCase from "../../../application/useCases/alunoProfessorCursoDisciplina/changeDisciplina/ChangeDisciplinaUseCase";

class ChangeDisciplinaController {
  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    const findAlunoByIdUseCase = container.resolve(FindAlunoByIdUseCase);
    const changeDisciplinaUseCase = container.resolve(ChangeDisciplinaUseCase);
    try {
      const { id, disciplina } = request.body;

      await findAlunoByIdUseCase.execute(id);

      const disciplinas = await changeDisciplinaUseCase.execute(id, disciplina);

      const resolve = {
        reponse: { disciplinas },
        error: null,
      };

      return { statusCode: 200, data: resolve };
    } catch (error) {
      console.log("error", error);
      return ErrorHandle(error);
    }
  }
}
export default ChangeDisciplinaController;
