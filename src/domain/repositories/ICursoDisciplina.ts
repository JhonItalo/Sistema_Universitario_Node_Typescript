import { CursoDisciplina } from "@prisma/client";

interface ICursoDisciplinaRepository {
  findBy(data: Partial<CursoDisciplina>, include?: any): Promise<CursoDisciplina>;
  findByMany(data: Partial<CursoDisciplina>, include?: any): Promise<CursoDisciplina[]>;
  changeDisciplina(id_curso: number, unselect: number[], add: number[]): Promise<CursoDisciplina[]>;
}
export { ICursoDisciplinaRepository };
