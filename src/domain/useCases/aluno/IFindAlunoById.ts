import { Aluno } from "@prisma/client";

interface IFindAlunoById {
  execute(id: string): Promise<Aluno>;
}
export { IFindAlunoById };
