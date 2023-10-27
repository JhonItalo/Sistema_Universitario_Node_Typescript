import { Disciplina } from "@prisma/client";
import { ICreateDisciplinaDTO, IUpdateDisciplinaDTO } from "../../dtos/disciplina";

interface ICreateDisciplina {
  execute({ nome, carga_horaria }: ICreateDisciplinaDTO): Promise<Disciplina>;
}
export { ICreateDisciplina };
