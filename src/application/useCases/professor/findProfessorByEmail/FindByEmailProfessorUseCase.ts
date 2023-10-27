import { inject, injectable } from "tsyringe";
import { IProfessorRepository } from "../../../../domain/repositories/IProfessorRepository";
import { IFindProfessorByEmail } from "../../../../domain/useCases/professor/IFindProfessorByEmail";
import { Professor } from "@prisma/client";
import DataNotFoundError from "../../../../presentation/erros/DataNotFoundError";
import { ProfessorNotFound } from "../../../../presentation/erros/Constants";

@injectable()
class FindProfessorByEmailUseCase implements IFindProfessorByEmail {
  constructor(@inject("ProfessorRepository") private professorRepository: IProfessorRepository) {}

  async execute(email: string): Promise<Professor> {
    const professor = await this.professorRepository.findBy({ email });
    if (!professor) {
      throw new DataNotFoundError(ProfessorNotFound);
    }
    return professor;
  }
}
export default FindProfessorByEmailUseCase;
