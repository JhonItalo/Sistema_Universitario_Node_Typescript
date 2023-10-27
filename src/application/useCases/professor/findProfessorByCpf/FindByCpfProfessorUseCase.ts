import { IProfessorRepository } from "../../../../domain/repositories/IProfessorRepository";
import { inject, injectable } from "tsyringe";
import { Professor } from "@prisma/client";
import { IFindProfessorByCpf } from "../../../../domain/useCases/professor/IFindProfessorByCpf";
import DataNotFoundError from "../../../../presentation/erros/DataNotFoundError";
import { ProfessorNotFound } from "../../../../presentation/erros/Constants";

@injectable()
class FindProfessorByCpfUseCase implements IFindProfessorByCpf {
  constructor(@inject("ProfessorRepository") private professorRepository: IProfessorRepository) {}
  async execute(cpf: string): Promise<Professor> {
    const professor = await this.professorRepository.findBy({ cpf });

    if (!professor) {
      throw new DataNotFoundError(ProfessorNotFound);
    }

    return professor;
  }
}

export default FindProfessorByCpfUseCase;
