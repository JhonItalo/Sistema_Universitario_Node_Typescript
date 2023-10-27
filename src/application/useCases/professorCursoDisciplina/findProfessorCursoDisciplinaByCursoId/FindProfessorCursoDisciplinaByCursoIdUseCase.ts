import { inject, injectable } from "tsyringe";
import { IProfessorCursoDisciplinaRepository } from "../../../../domain/repositories/IProfessorCursoDisciplinaRepository";
import { ProfessorCursoDisciplina } from "@prisma/client";
import { IFindProfessorCursoDisciplinaByCursoId } from "../../../../domain/useCases/professorCursoDisciplina/IFindProfessorCursoDisciplinaByCursoId";

@injectable()
class FindProfessorCursoDisciplinaByCursoIdUseCase
  implements IFindProfessorCursoDisciplinaByCursoId
{
  constructor(
    @inject("ProfessorCursoDisciplinaRepository")
    private professorCursoDisciplinaRepository: IProfessorCursoDisciplinaRepository
  ) {}

  async execute(id_curso: number): Promise<ProfessorCursoDisciplina[]> {
    return await this.professorCursoDisciplinaRepository.findByManyCursoId(id_curso);
  }
}
export default FindProfessorCursoDisciplinaByCursoIdUseCase;
