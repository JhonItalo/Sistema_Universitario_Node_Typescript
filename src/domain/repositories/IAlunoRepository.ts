import { Aluno } from "@prisma/client";
import { ICreateAlunoUserDTO, IUpdateAlunoUserDTO } from "../dtos/alunoDto";

interface IAlunoRepository {
  hasCache<T>(key: string): Promise<T | null>;

  create(data: ICreateAlunoUserDTO): Promise<Aluno>;

  update(data: IUpdateAlunoUserDTO): Promise<Aluno>;

  delete(data: string): Promise<void>;

  findBy(data: Partial<Aluno>, include?: any): Promise<Aluno>;

  findByMany(data: Partial<Aluno>, include?: any): Promise<Aluno[]>;

  findAll(): Promise<Aluno[]>;
}
export { IAlunoRepository };
