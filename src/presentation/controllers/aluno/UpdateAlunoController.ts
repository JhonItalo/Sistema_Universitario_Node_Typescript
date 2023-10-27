import { container } from "tsyringe";
import UpdateAlunoUseCase from "../../../application/useCases/aluno/updateAluno/UpdateAlunoUseCase";
import ErrorHandle from "../../erros/ErrorHandle";
import EmailIsValidUserUseCase from "../../../application/useCases/user/EmailIsValidUser/EmailIsValidUserUseCase";
import { IHttpRequest, IHttpResponse } from "../../protocols/http";

class UpdateAlunoController {
  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    const emailIsValidUserUseCase = container.resolve(EmailIsValidUserUseCase);
    const updateAlunoUseCase = container.resolve(UpdateAlunoUseCase);
    try {
      const { id, nome, email, sexo, telefone, id_curso, id_turma } = request.body;
      const updateAluno = { id, nome, email, sexo, telefone, id_turma, id_curso };
      const updateUser = { email };

      if (email) {
        await emailIsValidUserUseCase.execute(email);
      }
      const aluno = await updateAlunoUseCase.execute({ id, updateAluno, updateUser });

      return { statusCode: 200, data: { response: aluno, error: null } };
    } catch (error) {
      return ErrorHandle(error);
    }
  }
}
export default UpdateAlunoController;
