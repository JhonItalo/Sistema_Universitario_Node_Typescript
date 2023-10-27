import { ProfessorCursoDisciplina } from "@prisma/client";

interface IProfessorCursoDisciplinaRepository {
  findBy(data: Partial<ProfessorCursoDisciplina>, include?: any): Promise<ProfessorCursoDisciplina>;

  findByMany(
    data: Partial<ProfessorCursoDisciplina>,
    include?: any
  ): Promise<ProfessorCursoDisciplina[]>;

  findByManyCursoId(id_curso: number): Promise<ProfessorCursoDisciplina[]>;
  findByManyProfessorIdMoreInfo(id_professor: string): Promise<ProfessorCursoDisciplina[]>;

  changeCursoDisciplina(
    id_professor: string,
    unselect: number[],
    add: number[]
  ): Promise<ProfessorCursoDisciplina[]>;
}
export { IProfessorCursoDisciplinaRepository };
