import { AlunoProfessorCursoDisciplina } from "@prisma/client";

interface IAlunoProfessorCursoDisciplinaRepository {
  findBy(
    data: Partial<AlunoProfessorCursoDisciplina>,
    include?: any
  ): Promise<AlunoProfessorCursoDisciplina>;

  findByMany(
    data: Partial<AlunoProfessorCursoDisciplina>,
    include?: any
  ): Promise<AlunoProfessorCursoDisciplina[]>;

  findByAlunoIdMoreInfo(id_aluno: string): Promise<AlunoProfessorCursoDisciplina[]>;

  changeDisciplina(
    id_aluno: string,
    unselect: number[],
    add: number[]
  ): Promise<AlunoProfessorCursoDisciplina[]>;
}

export { IAlunoProfessorCursoDisciplinaRepository };
