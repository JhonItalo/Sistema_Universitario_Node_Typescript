import { Turma } from "@prisma/client";
import { ICreateTurmaDTO } from "../../dtos/turma";

interface ICreateTurma {
  execute({ nome, id_curso }: ICreateTurmaDTO): Promise<Turma>;
}
export { ICreateTurma };
