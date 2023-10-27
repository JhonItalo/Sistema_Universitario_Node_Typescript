import { Aluno } from "@prisma/client";
import { ICreateAlunoDTO } from "../../dtos/alunoDto";

interface ICreateAluno {
  execute(aluno: ICreateAlunoDTO): Promise<Aluno>;
}
export { ICreateAluno };
