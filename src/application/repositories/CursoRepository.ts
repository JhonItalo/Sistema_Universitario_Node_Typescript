import { ICursoRepository } from "../../domain/repositories/ICursoRepository";
import { prisma } from "../../infra/database/prismaClient";
import { Curso } from "@prisma/client";
import { ICreateCursoDTO, IUpdateCursoDTO } from "../DTOs/cursoDTO";

class CursoRepository implements ICursoRepository {
  private prisma: typeof prisma.curso;

  constructor() {
    this.prisma = prisma.curso;
  }

  async create({ nome, id_departamento }: ICreateCursoDTO): Promise<Curso> {
    return await this.prisma.create({
      data: {
        nome: nome,
        departamento: {
          connect: {
            id: id_departamento,
          },
        },
      },
    });
  }

  async findBy(data: Partial<Curso>, include?: any): Promise<Curso> {
    return await this.prisma.findFirst({
      where: {
        ...data,
      },
      include,
    });
  }

  async findByMany(data: Partial<Curso>, include?: any): Promise<Curso[]> {
    return await this.prisma.findMany({
      where: {
        ...data,
      },
      include,
    });
  }

  async delete(data: number): Promise<void> {
    await this.prisma.delete({
      where: {
        id: data,
      },
    });
    return;
  }

  async update({ id, ...update }: IUpdateCursoDTO): Promise<Curso> {
    return await this.prisma.update({
      where: {
        id,
      },
      data: {
        ...update,
      },
    });
  }

  async findAll(): Promise<Curso[]> {
    return await this.prisma.findMany({
      include: {
        departamento: true,
      },
    });
  }
}
export default CursoRepository;
