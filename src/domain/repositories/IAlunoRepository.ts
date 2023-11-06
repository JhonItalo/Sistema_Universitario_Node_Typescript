import { Aluno } from "@prisma/client";
import { ICreateAlunoUserDTO, IUpdateAlunoUserDTO } from "../DTOs/alunoDTO";

interface IAlunoRepository {
  create(data: ICreateAlunoUserDTO): Promise<Aluno>;

  update(data: IUpdateAlunoUserDTO): Promise<Aluno>;

  delete(data: string): Promise<void>;

  findBy(data: Partial<Aluno>, include?: any): Promise<Aluno>;

  findByMany(data: Partial<Aluno>, include?: any): Promise<Aluno[]>;

  findAll(): Promise<Aluno[]>;
}
export { IAlunoRepository };
