import { Turma } from "@prisma/client";
import { ICreateTurmaDTO } from "../../DTOs/turmaDTO";

interface ICreateTurma {
  execute({ nome, id_curso }: ICreateTurmaDTO): Promise<Turma>;
}
export { ICreateTurma };
