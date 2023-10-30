import { Aluno } from "@prisma/client";
import { ICreateAlunoDTO } from "../../../application/DTOs/alunoDTO";

interface ICreateAluno {
  execute(aluno: ICreateAlunoDTO): Promise<Aluno>;
}
export { ICreateAluno };
