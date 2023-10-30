import { Aluno } from "@prisma/client";
import { IUpdateAlunoUserDTO } from "../../../application/DTOs/alunoDTO";

interface IUpdateAluno {
  execute({ id, email, updateAluno, updateUser }: IUpdateAlunoUserDTO): Promise<Aluno>;
}
export { IUpdateAluno };
