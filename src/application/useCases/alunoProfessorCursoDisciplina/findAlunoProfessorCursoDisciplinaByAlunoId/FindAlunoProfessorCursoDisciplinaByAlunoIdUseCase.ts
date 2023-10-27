import { AlunoProfessorCursoDisciplina } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { IAlunoProfessorCursoDisciplinaRepository } from "../../../../domain/repositories/IAlunoProfessorCursoDisciplina";
import { IFindAlunoProfessorCursoDisciplinaByAlunoId } from "../../../../domain/useCases/alunoProfessorCursoDisciplina/IFindALunoProfessorCursoDisciplinaByAlunoId";

@injectable()
class FindGradeByAlunoIdUseCase implements IFindAlunoProfessorCursoDisciplinaByAlunoId {
  constructor(
    @inject("AlunoProfessorCursoDisciplinaRepository")
    private alunoProfessorCursoDisciplinaRepository: IAlunoProfessorCursoDisciplinaRepository
  ) {}

  async execute(id_aluno: string): Promise<AlunoProfessorCursoDisciplina[]> {
    const grade = await this.alunoProfessorCursoDisciplinaRepository.findByAlunoIdMoreInfo(
      id_aluno
    );
    return grade;
  }
}

export default FindGradeByAlunoIdUseCase;
