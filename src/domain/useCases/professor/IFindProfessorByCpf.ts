import { Professor } from "@prisma/client";

interface IFindProfessorByCpf {
  execute(cpf: string): Promise<Professor>;
}
export { IFindProfessorByCpf };
