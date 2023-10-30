import { inject, injectable } from "tsyringe";
import { ICursoRepository } from "../../../../domain/repositories/ICursoRepository";
import DataNotFoundError from "../../../../presentation/erros/DataNotFoundError";
import { CursoNotFound } from "../../../../presentation/erros/Constants";
import { IFindCursoById } from "../../../../domain/useCases/curso/IFindCursoById";
import { Curso } from "@prisma/client";
import { ICreateCursoDTO } from "../../../DTOs/cursoDTO";

@injectable()
class FindCursoByIdUseCase implements IFindCursoById {
  constructor(@inject("CursoRepository") private cursoRepository: ICursoRepository) {}

  async execute(id: number): Promise<Curso> {
    const curso = await this.cursoRepository.findBy({ id });
    if (!curso) {
      throw new DataNotFoundError(CursoNotFound);
    }
    return curso;
  }
}
export default FindCursoByIdUseCase;
