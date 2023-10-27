import { Disciplina } from "@prisma/client";
import { IUpdateDisciplinaDTO } from "../../dtos/disciplina";

interface IUpdateDisciplina {
  execute({ id, nome, carga_horaria }: IUpdateDisciplinaDTO): Promise<Disciplina>;
}
export { IUpdateDisciplina };
