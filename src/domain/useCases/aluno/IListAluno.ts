import { Aluno } from "@prisma/client";

interface IListAluno {
  execute(): Promise<Aluno[]>;
}
export { IListAluno };
