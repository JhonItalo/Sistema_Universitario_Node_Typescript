import { ICursoRepository } from "../../../../domain/repositories/ICursoRepository";
import { injectable, inject } from "tsyringe";
import { IDeleteCurso } from "../../../../domain/useCases/curso/IDeleteCurso";
import DataNotFoundError from "../../../../presentation/erros/DataNotFoundError";
import { CursoNotFound } from "../../../../presentation/erros/Constants";

@injectable()
class DeleteCursoUseCase implements IDeleteCurso {
  constructor(@inject("CursoRepository") private cursoRepository: ICursoRepository) {}

  async execute(id: number): Promise<void> {
    const curso = await this.cursoRepository.findBy({ id });
    if (!curso) {
      throw new DataNotFoundError(CursoNotFound);
    }
    await this.cursoRepository.delete(id);
    return;
  }
}

export default DeleteCursoUseCase;
