import { ProfessorCursoDisciplina } from "@prisma/client";

interface IFindProfessorCursoDisciplinaByCursoId {
  execute(id_curso: number): Promise<ProfessorCursoDisciplina[]>;
}
export { IFindProfessorCursoDisciplinaByCursoId };
