import { Disciplina } from "@prisma/client";
import { IUpdateDisciplinaDTO } from "../../DTOs/disciplinaDTO";

interface IUpdateDisciplina {
  execute({ id, nome, carga_horaria }: IUpdateDisciplinaDTO): Promise<Disciplina>;
}
export { IUpdateDisciplina };
