import { ProfessorCursoDisciplina } from "@prisma/client";

interface IAddListProfessorCursoDisciplina {
  execute(id_professor: string, listCursoDisciplina: number[]): Promise<ProfessorCursoDisciplina[]>;
}
export { IAddListProfessorCursoDisciplina };
