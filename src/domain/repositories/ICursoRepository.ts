import { Curso } from "@prisma/client";
import { ICreateCursoDTO, IUpdateCursoDTO } from "../../application/DTOs/cursoDTO";

export interface ICursoRepository {
  create(data: ICreateCursoDTO): Promise<Curso>;

  update(data: IUpdateCursoDTO): Promise<Curso>;

  delete(data: number): Promise<void>;

  findBy(data: Partial<Curso>, include?: any): Promise<Curso>;

  findByMany(data: Partial<Curso>, include?: any): Promise<Curso[]>;

  findAll(): Promise<Curso[]>;
}
