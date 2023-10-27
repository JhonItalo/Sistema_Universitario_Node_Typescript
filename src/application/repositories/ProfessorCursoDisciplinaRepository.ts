import { ProfessorCursoDisciplina } from "@prisma/client";

import { prisma } from "../../infra/database/prismaClient";
import { IProfessorCursoDisciplinaRepository } from "../../domain/repositories/IProfessorCursoDisciplinaRepository";

class ProfessorCursoDisciplinaRepository implements IProfessorCursoDisciplinaRepository {
  private repository: typeof prisma.professorCursoDisciplina;

  constructor() {
    this.repository = prisma.professorCursoDisciplina;
  }

  async findBy(
    data: Partial<ProfessorCursoDisciplina>,
    include?: any
  ): Promise<ProfessorCursoDisciplina> {
    return await this.repository.findFirst({
      where: {
        ...data,
      },
      include,
    });
  }

  async findByMany(
    data: Partial<ProfessorCursoDisciplina>,
    include?: any
  ): Promise<ProfessorCursoDisciplina[]> {
    return await this.repository.findMany({
      where: {
        ...data,
      },
      include,
    });
  }

  async findByManyCursoId(id_curso: number): Promise<ProfessorCursoDisciplina[]> {
    return await this.repository.findMany({
      where: {
        cursoDisciplina: {
          id_curso,
        },
      },
      include: {
        professor: {
          select: {
            id: true,
            nome: true,
          },
        },
        cursoDisciplina: {
          select: {
            id: true,
            curso: true,
            disciplina: true,
          },
        },
      },
    });
  }

  async findByManyProfessorIdMoreInfo(id_professor: string): Promise<ProfessorCursoDisciplina[]> {
    return await this.repository.findMany({
      where: {
        id_professor: id_professor,
      },
      select: {
        id: true,
        id_professor: true,
        id_cursoDisciplina: true,
        cursoDisciplina: {
          select: {
            curso: true,
            disciplina: true,
          },
        },
      },
    });
  }

  async changeCursoDisciplina(
    id_professor: string,
    unselect: number[],
    add: number[]
  ): Promise<ProfessorCursoDisciplina[]> {
    await prisma.$transaction([
      this.repository.deleteMany({
        where: {
          id_professor: id_professor,
          id_cursoDisciplina: { in: unselect },
        },
      }),

      this.repository.createMany({
        data: add.map((cursoDisciplina: number) => ({
          id_professor: id_professor,
          id_cursoDisciplina: cursoDisciplina,
        })),
      }),
    ]);
    return await this.findByMany({ id_professor });
  }
}
export default ProfessorCursoDisciplinaRepository;
