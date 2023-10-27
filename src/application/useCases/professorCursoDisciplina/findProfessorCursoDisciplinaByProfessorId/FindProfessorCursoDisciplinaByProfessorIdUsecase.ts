import { ProfessorCursoDisciplina } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { IProfessorCursoDisciplinaRepository } from "../../../../domain/repositories/IProfessorCursoDisciplinaRepository";
import { IFindProfessorCursoDisciplinaByProfessorId } from "../../../../domain/useCases/professorCursoDisciplina/IFindProfessorCursoDisciplinaByProfessorId";

@injectable()
class FindProfessorCursoDisciplinaByProfessorIdUsecase
  implements IFindProfessorCursoDisciplinaByProfessorId
{
  constructor(
    @inject("ProfessorCursoDisciplinaRepository")
    private professorCursoDisciplinaRepository: IProfessorCursoDisciplinaRepository
  ) {}
  async execute(id_professor: string): Promise<ProfessorCursoDisciplina[]> {
    return await this.professorCursoDisciplinaRepository.findByManyProfessorIdMoreInfo(
      id_professor
    );
  }
}

export default FindProfessorCursoDisciplinaByProfessorIdUsecase;
