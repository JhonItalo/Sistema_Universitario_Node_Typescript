import { Aluno } from "@prisma/client";
import { IUpdateAlunoUserDTO } from "../../DTOs/alunoDTO";

interface IUpdateAluno {
  execute({ id, email, updateAluno, updateUser }: IUpdateAlunoUserDTO): Promise<Aluno>;
}
export { IUpdateAluno };
