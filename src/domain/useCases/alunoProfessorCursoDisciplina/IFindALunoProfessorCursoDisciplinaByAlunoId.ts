import { AlunoProfessorCursoDisciplina } from "@prisma/client";

interface IFindAlunoProfessorCursoDisciplinaByAlunoId {
  execute(id_aluno: string): Promise<AlunoProfessorCursoDisciplina[]>;
}
export { IFindAlunoProfessorCursoDisciplinaByAlunoId };
