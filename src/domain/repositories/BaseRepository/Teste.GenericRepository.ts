import { prisma } from "../../../infra/database/prismaClient";

class RepositoryGeneric<Model> {
  private prisma;

  constructor(instance: string) {
    this.prisma = prisma[instance];
  }

  async delete<T>(data: T): Promise<void> {
    await this.prisma.delete({
      where: {
        id: data,
      },
    });
    return;
  }

  async findBy<T>(data: T): Promise<Model> {
    return (await this.prisma.findFirst({
      where: {
        ...data,
      },
    })) as Model;
  }

  async findByMany<T>(data: T): Promise<Model[]> {
    return (await this.prisma.findMany({
      where: {
        ...data,
      },
    })) as Model[];
  }

  async findAll(): Promise<Model[]> {
    return (await this.prisma.findMany()) as Model[];
  }
}

export default RepositoryGeneric;
