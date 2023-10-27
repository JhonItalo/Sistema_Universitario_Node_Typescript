import { Aluno } from "@prisma/client";
import { IUpdateAlunoUserDTO } from "../../dtos/alunoDto";

interface IUpdateAluno {
  execute({ id, email, updateAluno, updateUser }: IUpdateAlunoUserDTO): Promise<Aluno>;
}
export { IUpdateAluno };
