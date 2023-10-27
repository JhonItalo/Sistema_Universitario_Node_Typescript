import { Aluno } from "@prisma/client";

interface IFindAlunoByCpf {
  execute(cpf: string): Promise<Aluno>;
}
export { IFindAlunoByCpf };
