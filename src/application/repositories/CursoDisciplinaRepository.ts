import { prisma } from "../../infra/database/prismaClient";
import { CursoDisciplina } from "@prisma/client";
import { ICursoDisciplinaRepository } from "../../domain/repositories/ICursoDisciplina";

class CursoDisciplinaRepository implements ICursoDisciplinaRepository {
  private prisma: typeof prisma.cursoDisciplina;

  constructor() {
    this.prisma = prisma.cursoDisciplina;
  }

  async findBy(data: Partial<CursoDisciplina>, include?: any): Promise<CursoDisciplina> {
    return await this.prisma.findFirst({
      where: {
        ...data,
      },
      include,
    });
  }

  async findByMany(data: Partial<CursoDisciplina>, include?: any): Promise<CursoDisciplina[]> {
    return await this.prisma.findMany({
      where: {
        ...data,
      },
      include,
    });
  }

  async changeDisciplina(
    id_curso: number,
    unselect: number[],
    add: number[]
  ): Promise<CursoDisciplina[]> {
    await prisma.$transaction([
      this.prisma.deleteMany({
        where: {
          id_curso: id_curso,
          id_disciplina: { in: unselect },
        },
      }),

      this.prisma.createMany({
        data: add.map((disciplina: number) => ({
          id_curso: id_curso,
          id_disciplina: disciplina,
        })),
      }),
    ]);

    return await this.findByMany({ id_curso });
  }
}
export default CursoDisciplinaRepository;
