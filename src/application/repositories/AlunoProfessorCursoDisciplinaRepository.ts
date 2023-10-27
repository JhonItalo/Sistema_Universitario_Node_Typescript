import { IAlunoProfessorCursoDisciplinaRepository } from "../../domain/repositories/IAlunoProfessorCursoDisciplina";
import { prisma } from "../../infra/database/prismaClient";
import { AlunoProfessorCursoDisciplina } from "@prisma/client";

class AlunoProfessorCursoDisciplinaRepository implements IAlunoProfessorCursoDisciplinaRepository {
  private prisma: typeof prisma.alunoProfessorCursoDisciplina;

  constructor() {
    this.prisma = prisma.alunoProfessorCursoDisciplina;
  }

  async findBy(
    data: Partial<AlunoProfessorCursoDisciplina>,
    include?: any
  ): Promise<AlunoProfessorCursoDisciplina> {
    return await this.prisma.findFirst({
      where: {
        ...data,
      },
      include,
    });
  }

  async findByMany(
    data: Partial<AlunoProfessorCursoDisciplina>,
    include?: any
  ): Promise<AlunoProfessorCursoDisciplina[]> {
    return await this.prisma.findMany({
      where: {
        ...data,
      },
      include,
    });
  }

  async findByAlunoIdMoreInfo(id_aluno: string): Promise<AlunoProfessorCursoDisciplina[]> {
    return await this.prisma.findMany({
      where: { id_aluno: id_aluno },
      select: {
        id: true,
        id_aluno: true,
        id_professorCursoDisciplina: true,
        professorCursoDisciplina: {
          select: {
            professor: {
              select: {
                nome: true,
              },
            },
            cursoDisciplina: {
              select: {
                curso: {
                  select: {
                    id: true,
                    nome: true,
                  },
                },
                disciplina: {
                  select: {
                    nome: true,
                    carga_horaria: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  }

  async changeDisciplina(
    id_aluno: string,
    unselect: number[],
    add: number[]
  ): Promise<AlunoProfessorCursoDisciplina[]> {
    await prisma.$transaction([
      this.prisma.deleteMany({
        where: {
          id_aluno: id_aluno,
          id_professorCursoDisciplina: { in: unselect },
        },
      }),

      this.prisma.createMany({
        data: add.map((professorCursDisciplina: number) => ({
          id_aluno: id_aluno,
          id_professorCursoDisciplina: professorCursDisciplina,
        })),
      }),
    ]);
    return this.findByMany({ id_aluno });
  }
}

export default AlunoProfessorCursoDisciplinaRepository;
