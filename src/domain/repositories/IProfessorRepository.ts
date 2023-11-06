import { Professor } from "@prisma/client";

import { ICreateProfessorUserDTO, IUpdateProfessorUserDTO } from "../DTOs/professorDTO";

interface IProfessorRepository {
  hasCache<T>(key: string): Promise<T | null>;

  create(data: ICreateProfessorUserDTO): Promise<Professor>;

  update(data: IUpdateProfessorUserDTO): Promise<Professor>;

  delete(data: string): Promise<void>;

  findBy(data: Partial<Professor>, iclude?: any): Promise<Professor>;

  findByMany(data: Partial<Professor>, include?: any): Promise<Professor[]>;

  findAll(): Promise<Professor[]>;
}
export { IProfessorRepository };
