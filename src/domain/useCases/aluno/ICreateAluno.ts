import { Aluno } from "@prisma/client";
import { ICreateAlunoDTO } from "../../DTOs/alunoDTO";

interface ICreateAluno {
  execute(aluno: ICreateAlunoDTO): Promise<Aluno>;
}
export { ICreateAluno };
