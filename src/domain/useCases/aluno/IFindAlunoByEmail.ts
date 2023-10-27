import { Aluno } from "@prisma/client";

interface IFindAlunoByEmail {
  execute(email: string): Promise<Aluno>;
}
export { IFindAlunoByEmail };
