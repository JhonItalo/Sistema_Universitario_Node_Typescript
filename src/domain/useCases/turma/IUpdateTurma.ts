import { Turma } from "@prisma/client";
import { IUpdateTurmaDTO } from "../../dtos/turma";

interface IUpdateTurma {
  execute({ id, nome }: IUpdateTurmaDTO): Promise<Turma>;
}
export { IUpdateTurma };
