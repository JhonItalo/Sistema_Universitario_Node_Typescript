import { Disciplina } from "@prisma/client";
import {
  ICreateDisciplinaDTO,
  IUpdateDisciplinaDTO,
} from "../../../application/DTOs/disciplinaDTO";

interface ICreateDisciplina {
  execute({ nome, carga_horaria }: ICreateDisciplinaDTO): Promise<Disciplina>;
}
export { ICreateDisciplina };
