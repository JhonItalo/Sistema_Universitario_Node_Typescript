import { Disciplina } from "@prisma/client";
import { prisma } from "../../infra/database/prismaClient";
import { IDisciplinaRepository } from "../../domain/repositories/IDisciplinaRepository";
import { ICreateDisciplinaDTO, IUpdateDisciplinaDTO } from "../../domain/dtos/disciplina";

class DisciplinaRepository implements IDisciplinaRepository {
  private repository: typeof prisma.disciplina;

  constructor() {
    this.repository = prisma.disciplina;
  }

  async create(data: ICreateDisciplinaDTO): Promise<Disciplina> {
    return await this.repository.create({
      data: {
        ...data,
      },
    });
  }
  async findBy(data: Partial<Disciplina>, include?: any): Promise<Disciplina> {
    return await this.repository.findFirst({
      where: {
        ...data,
      },
      include,
    });
  }

  async findByMany<T>(data: Partial<Disciplina>, include?: any): Promise<Disciplina[]> {
    return await this.repository.findMany({
      where: {
        ...data,
      },
      include,
    });
  }
  async delete(id: number): Promise<void> {
    await this.repository.delete({
      where: {
        id,
      },
    });
  }
  async update({ id, ...update }: IUpdateDisciplinaDTO): Promise<Disciplina> {
    return await this.repository.update({
      where: {
        id: id,
      },
      data: {
        ...update,
      },
    });
  }

  async findAll(): Promise<Disciplina[]> {
    return await this.repository.findMany();
  }
}
export default DisciplinaRepository;
