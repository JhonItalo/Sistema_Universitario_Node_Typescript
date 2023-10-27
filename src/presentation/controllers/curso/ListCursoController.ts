import { Request, Response } from "express";
import { container } from "tsyringe";
import ListCursosUsecase from "../../../application/useCases/curso/list/ListCursosUseCase";
import ErrorHandle from "../../erros/ErrorHandle";
import { IHttpRequest, IHttpResponse } from "../../protocols/http";

class ListCursoController {
  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    const listCursosUseCase = container.resolve(ListCursosUsecase);
    try {
      const curso = await listCursosUseCase.execute();

      return { statusCode: 200, data: { response: curso, error: null } };
    } catch (error) {
      return ErrorHandle(error);
    }
  }
}
export default ListCursoController;
