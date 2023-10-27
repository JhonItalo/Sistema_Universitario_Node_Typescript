import { container } from "tsyringe";
import CreateAlunoUseCase from "../../../application/useCases/aluno/createAluno/CreateAlunoUseCase";
import EmailIsValidUserUseCase from "../../../application/useCases/user/EmailIsValidUser/EmailIsValidUserUseCase";
import ErrorHandle from "../../erros/ErrorHandle";
import { IHttpRequest, IHttpResponse } from "../../protocols/http";

class CreateAlunoController {
  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    const createAlunoUseCase = container.resolve(CreateAlunoUseCase);

    const emailIsValidUserUseCase = container.resolve(EmailIsValidUserUseCase);

    try {
      const aluno = request.body;

      await emailIsValidUserUseCase.execute(aluno.email);

      const alunoCreated = await createAlunoUseCase.execute(aluno);

      return { statusCode: 201, data: { response: alunoCreated, error: null } };
    } catch (error) {
      console.log(error);
      return ErrorHandle(error);
    }
  }
}

export default CreateAlunoController;
