import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { User } from "@prisma/client";
import { prisma } from "../../infra/database/prismaClient";
import { IUserStatusDTO } from "../DTOs/userDTO";

class UserRepository implements IUserRepository {
  private prisma: typeof prisma.user;

  constructor() {
    this.prisma = prisma.user;
  }

  async findBy(data: Partial<User>): Promise<User> {
    return await this.prisma.findFirst({
      where: {
        ...data,
      },
    });
  }

  async findByStatus({
    id_aluno,
    id_professor,
    id_departamento,
  }: IUserStatusDTO): Promise<Partial<User>> {
    return await this.prisma.findFirst({
      where: {
        OR: [
          {
            id_aluno,
          },
          {
            id_professor,
          },
          {
            id_departamento,
          },
        ],
      },
      select: {
        email: true,
        status: true,
      },
    });
  }
}

export default UserRepository;
