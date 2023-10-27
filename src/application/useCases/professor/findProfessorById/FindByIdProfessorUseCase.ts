import { inject, injectable } from "tsyringe";
import { IProfessorRepository } from "../../../../domain/repositories/IProfessorRepository";
import DataNotFoundError from "../../../../presentation/erros/DataNotFoundError";
import { ProfessorNotFound } from "../../../../presentation/erros/Constants";
import { IFindProfessorById } from "../../../../domain/useCases/professor/IFindProfessorById";
import { Professor } from "@prisma/client";
@injectable()
class FindProfessorByIdUseCase implements IFindProfessorById {
  constructor(@inject("ProfessorRepository") private professorRepository: IProfessorRepository) {}
  async execute(id: string): Promise<Professor> {
    const professor = await this.professorRepository.findBy({ id });
    if (!professor) {
      throw new DataNotFoundError(ProfessorNotFound);
    }
    return professor;
  }
}

export default FindProfessorByIdUseCase;
