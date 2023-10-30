import { Turma } from "@prisma/client";
import { ICreateTurmaDTO } from "../../../application/DTOs/turmaDTO";

interface ICreateTurma {
  execute({ nome, id_curso }: ICreateTurmaDTO): Promise<Turma>;
}
export { ICreateTurma };
