import { Curso } from "@prisma/client";
import { ICursoRepository } from "../../../../domain/repositories/ICursoRepository";
import { IListCurso } from "../../../../domain/useCases/curso/IListCurso";
import { inject, injectable } from "tsyringe";

@injectable()
class ListCursosUsecase implements IListCurso {
  constructor(@inject("CursoRepository") private cursoRepository: ICursoRepository) {}
  async execute(): Promise<Curso[]> {
    return await this.cursoRepository.findAll();
  }
}
export default ListCursosUsecase;
