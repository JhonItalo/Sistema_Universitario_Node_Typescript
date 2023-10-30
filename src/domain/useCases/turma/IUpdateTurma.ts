import { Turma } from "@prisma/client";
import { IUpdateTurmaDTO } from "../../../application/DTOs/turmaDTO";

interface IUpdateTurma {
  execute({ id, nome }: IUpdateTurmaDTO): Promise<Turma>;
}
export { IUpdateTurma };
