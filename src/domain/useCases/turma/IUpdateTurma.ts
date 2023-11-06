import { Turma } from "@prisma/client";
import { IUpdateTurmaDTO } from "../../DTOs/turmaDTO";

interface IUpdateTurma {
  execute({ id, nome }: IUpdateTurmaDTO): Promise<Turma>;
}
export { IUpdateTurma };
