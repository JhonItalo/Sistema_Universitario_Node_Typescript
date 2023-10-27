import { Disciplina } from "@prisma/client";

interface IListDisciplina {
  execute(): Promise<Disciplina[]>;
}
export { IListDisciplina };
