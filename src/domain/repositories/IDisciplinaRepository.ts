import { Disciplina } from "@prisma/client";
import { ICreateDisciplinaDTO, IUpdateDisciplinaDTO } from "../DTOs/disciplinaDTO";

interface IDisciplinaRepository {
  create(data: ICreateDisciplinaDTO): Promise<Disciplina>;

  update(data: IUpdateDisciplinaDTO): Promise<Disciplina>;

  delete(data: number): Promise<void>;

  findBy(data: Partial<Disciplina>, include?: any): Promise<Disciplina>;

  findByMany(data: Partial<Disciplina>, include?: any): Promise<Disciplina[]>;

  findAll(): Promise<Disciplina[]>;
}
export { IDisciplinaRepository };
