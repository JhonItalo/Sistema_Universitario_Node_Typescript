import { Turma } from "@prisma/client";
import { ICreateTurmaDTO, IUpdateTurmaDTO } from "../dtos/turma";


interface ITurmaRepository {
  create(data: ICreateTurmaDTO): Promise<Turma>;

  update(data: IUpdateTurmaDTO): Promise<Turma>;

  delete(data: number): Promise<void>;

  findBy(data: Partial<Turma>, include?: any): Promise<Turma>;

  findByMany(data: Partial<Turma>, include?: any): Promise<Turma[]>;

  findAll(): Promise<Turma[]>;
}
export { ITurmaRepository };
