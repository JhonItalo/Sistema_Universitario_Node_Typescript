import { ProfessorCursoDisciplina } from "@prisma/client";

interface IFindProfessorCursoDisciplinaByProfessorId {
  execute(id_professor: string): Promise<ProfessorCursoDisciplina[]>;
}
export { IFindProfessorCursoDisciplinaByProfessorId };
