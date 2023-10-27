import { CursoDisciplina } from "@prisma/client";

interface IAddListCursoDisciplina {
  execute(id_curso: number, listDisciplina: number[]): Promise<CursoDisciplina[]>;
}
export { IAddListCursoDisciplina };
