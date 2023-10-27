import { Curso } from "@prisma/client";

interface IListCurso {
  execute(): Promise<Curso[]>;
}
export { IListCurso };
