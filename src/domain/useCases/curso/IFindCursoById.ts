import { Curso } from "@prisma/client";

interface IFindCursoById {
  execute(id: number): Promise<Curso>;
}
export { IFindCursoById };
