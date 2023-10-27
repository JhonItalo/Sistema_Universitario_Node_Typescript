import { Turma } from "@prisma/client";

interface IListTurma {
  execute(): Promise<Turma[]>;
}
export { IListTurma };
