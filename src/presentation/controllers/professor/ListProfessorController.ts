import { container } from "tsyringe";
import ListProfessorUseCase from "../../../application/useCases/professor/list/ListProfessorUseCase";
import { Request, Response } from "express";
import ErrorHandle from "../../erros/ErrorHandle";
import { IHttpRequest, IHttpResponse } from "../../protocols/http";

class ListProfessorController {
  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    const listProfessorUseCase = container.resolve(ListProfessorUseCase);
    try {
      const professor = await listProfessorUseCase.execute();

      return { statusCode: 200, data: { response: professor, error: null } };
      
    } catch (error) {
      return ErrorHandle(error);
    }
  }
}
export default ListProfessorController;
