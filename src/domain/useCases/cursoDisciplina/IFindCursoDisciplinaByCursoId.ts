import { CursoDisciplina } from "@prisma/client";

interface IFindCursoDisciplinaByCursoId {
  execute(id_curso: number): Promise<CursoDisciplina[]>;
}
export { IFindCursoDisciplinaByCursoId };
