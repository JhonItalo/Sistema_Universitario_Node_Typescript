import { IProfessorRepository } from "../../domain/repositories/IProfessorRepository";
import { Professor } from "@prisma/client";
import { prisma } from "../../infra/database/prismaClient";
import { RedisClient } from "../../infra/database/redisClient";
import { ICreateProfessorUserDTO, IUpdateProfessorUserDTO } from "../DTOs/professorDTO";

class ProfessorRepository implements IProfessorRepository {
  private repository: typeof prisma.professor;

  constructor() {
    this.repository = prisma.professor;
  }

  async hasCache<T>(key: string): Promise<T | null> {
    const valor = await RedisClient.get(key);
    return valor ? JSON.parse(valor) : null;
  }

  async create({
    nome,
    email,
    cpf,
    sexo,
    telefone,
    id_departamento,
    password,
  }: ICreateProfessorUserDTO): Promise<Professor> {
    const professor = await this.repository.create({
      data: {
        nome: nome,
        email: email,
        cpf: cpf,
        sexo: sexo,
        telefone: telefone,
        departamento: {
          connect: {
            id: id_departamento,
          },
        },
        User: {
          create: {
            email: email,
            password: password,
            status: "professor",
          },
        },
      },
    });
    RedisClient.del("professor_list");
    return professor;
  }

  async findBy(data: Partial<Professor>, include?: any): Promise<Professor> {
    return await this.repository.findFirst({
      where: {
        ...data,
      },
    });
  }

  async findByMany<T>(data: T): Promise<Professor[]> {
    return await this.repository.findMany({
      where: {
        ...data,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete({
      where: { id },
    });
    RedisClient.del("professor_list");
    return;
  }

  async findAll(): Promise<Professor[]> {
    const list = await this.repository.findMany();
    RedisClient.set("professor_list", JSON.stringify(list), { EX: 3600 });
    return list;
  }

  async update(data: Partial<IUpdateProfessorUserDTO>): Promise<Professor> {
    const { id, email, updateProfessor, updateUser } = data as IUpdateProfessorUserDTO;
    await this.repository.update({
      where: {
        id: id,
      },
      data: {
        ...updateProfessor,
        User: {
          update: {
            where: {
              email: email,
            },
            data: {
              ...updateUser,
            },
          },
        },
      },
    });
    RedisClient.del("professor_list");
    return await this.findBy({ id });
  }
}
export default ProfessorRepository;
