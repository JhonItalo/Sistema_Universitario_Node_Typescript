import { inject, injectable } from "tsyringe";
import { IProfessorRepository } from "../../../../domain/repositories/IProfessorRepository";
import { Professor } from "@prisma/client";
import { IListProfessor } from "../../../../domain/useCases/professor/IListProfessor";

@injectable()
class ListProfessorUseCase implements IListProfessor {
  constructor(@inject("ProfessorRepository") private professorRepository: IProfessorRepository) {}

  async execute(): Promise<Professor[]> {
    const cache = await this.professorRepository.hasCache<Professor[]>("professor_list");

    if (cache) {
      return cache;
    }

    return await this.professorRepository.findAll();
  }
}

export default ListProfessorUseCase;
