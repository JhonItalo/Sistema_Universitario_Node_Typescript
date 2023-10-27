import { Request, Response } from "express";
import CreateProfessorUseCase from "../../../application/useCases/professor/createProfessor/CreateProfessorUseCase";
import ValidEmailUserUseCase from "../../../application/useCases/user/EmailIsValidUser/EmailIsValidUserUseCase";
import { container } from "tsyringe";
import ErrorHandle from "../../erros/ErrorHandle";
import EmailIsValidUserUseCase from "../../../application/useCases/user/EmailIsValidUser/EmailIsValidUserUseCase";
import { IHttpRequest, IHttpResponse } from "../../protocols/http";

class CreateProfessorController {
  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    const emailIsValidUserUseCase = container.resolve(EmailIsValidUserUseCase);
    const createProfessorUseCase = container.resolve(CreateProfessorUseCase);

    try {
      const professor = request.body;

      await emailIsValidUserUseCase.execute(professor.email);

      const professorCreated = await createProfessorUseCase.execute(professor);

      return { statusCode: 201, data: { response: professorCreated, error: null } };
    } catch (error) {
      return ErrorHandle(error);
    }
  }
}
export default CreateProfessorController;
