import { Turma } from "@prisma/client";
import { prisma } from "../../infra/database/prismaClient";

import { ITurmaRepository } from "../../domain/repositories/ITurmaRepository";
import { ICreateTurmaDTO, IUpdateTurmaDTO } from "../DTOs/turmaDTO";

class TurmaRepository implements ITurmaRepository {
  private prisma: typeof prisma.turma;

  constructor() {
    this.prisma = prisma.turma;
  }

  async create({ nome, id_curso }: ICreateTurmaDTO): Promise<Turma> {
    return await this.prisma.create({
      data: {
        nome: nome,
        curso: {
          connect: {
            id: id_curso,
          },
        },
      },
    });
  }
  async findBy(data: Partial<Turma>, include?: any): Promise<Turma> {
    return await this.prisma.findFirst({
      where: {
        ...data,
      },
      include,
    });
  }

  async findByMany(data: Partial<Turma>, include?: any): Promise<Turma[]> {
    return await this.prisma.findMany({
      where: {
        ...data,
      },
      include,
    });
  }

  async update({ id, ...update }: IUpdateTurmaDTO): Promise<Turma> {
    return await this.prisma.update({
      where: {
        id,
      },
      data: {
        ...update,
      },
    });
  }

  async delete(id: number): Promise<void> {
    await this.prisma.deleteMany({
      where: {
        id,
      },
    });
    return;
  }

  async findAll(): Promise<Turma[]> {
    return await this.prisma.findMany({
      include: {
        curso: true,
      },
    });
  }
}
export default TurmaRepository;
