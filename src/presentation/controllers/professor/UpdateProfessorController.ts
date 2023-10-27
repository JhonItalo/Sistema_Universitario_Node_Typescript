import UpdateProfessorUseCase from "../../../application/useCases/professor/updateProfessor/UpdateProfessorUseCase";
import { container } from "tsyringe";
import ErrorHandle from "../../erros/ErrorHandle";
import EmailIsValidUserUseCase from "../../../application/useCases/user/EmailIsValidUser/EmailIsValidUserUseCase";
import { IHttpRequest, IHttpResponse } from "../../protocols/http";

class UpdateProfessorController {
  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    const emailIsValidUserUseCase = container.resolve(EmailIsValidUserUseCase);
    const updateProfessorUseCase = container.resolve(UpdateProfessorUseCase);

    try {
      const { id, nome, email, sexo, telefone, id_departamento, password } = request.body;
      const updateProfessor = { id, nome, email, sexo, telefone, id_departamento };
      const updateUser = { email, password };

      if (email) {
        await emailIsValidUserUseCase.execute(email);
      }
      const professor = await updateProfessorUseCase.execute({ id, updateProfessor, updateUser });

      return { statusCode: 200, data: { response: professor, error: null } };
    } catch (error) {
      return ErrorHandle(error);
    }
  }
}

export default UpdateProfessorController;
