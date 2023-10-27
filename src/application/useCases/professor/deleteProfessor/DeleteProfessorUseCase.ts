import { inject, injectable } from "tsyringe";
import { IProfessorRepository } from "../../../../domain/repositories/IProfessorRepository";
import { IDeleteProfessor } from "../../../../domain/useCases/professor/IDeleteProfessor";
import DataNotFoundError from "../../../../presentation/erros/DataNotFoundError";
import { ProfessorNotFound } from "../../../../presentation/erros/Constants";
@injectable()
class DeleteProfessorUseCase implements IDeleteProfessor {
  constructor(@inject("ProfessorRepository") private professorRepository: IProfessorRepository) {}

  async execute(id: string): Promise<void> {
    const professor = await this.professorRepository.findBy({ id });
    if (!professor) {
      throw new DataNotFoundError(ProfessorNotFound);
    }
    await this.professorRepository.delete(id);
  }
}

export default DeleteProfessorUseCase;
