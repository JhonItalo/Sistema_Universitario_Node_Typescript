import { IProfessorRepository } from '../../domain/repositories/professor.repository.interface';
import { prisma } from '../../../../infra/database/prismaClient';
import { IProfessorDTO } from '../dtos/professor.dto';
import { Professor } from '@prisma/client';

class ProfessorRepository implements IProfessorRepository {
	private repository: typeof prisma.professor;

	constructor() {
		this.repository = prisma.professor;
	}

	async findBy(input: Partial<IProfessorDTO>, include?: any): Promise<Professor> {
		return await this.repository.findFirst({
			where: {
				...input,
			},
			include,
		});
	}

	async findByMany(input: Partial<IProfessorDTO>, include?: any): Promise<Professor[]> {
		return await this.repository.findMany({
			where: {
				...input,
			},
			include,
		});
	}

	async delete(id: string): Promise<void> {
		await this.repository.delete({
			where: { id },
		});
		return;
	}

	async findAll(): Promise<Professor[]> {
		return await this.repository.findMany();
	}
}
export default ProfessorRepository;
/**
 *  

  async create(input: ICreateProfessorUserDTO): Promise<IProfessorDTO> {
    const professor = await this.repository.create({
      data: {
        nome: input.nome,
        email: input.email,
        cpf: input.cpf,
        sexo: input.sexo,
        telefone: input.telefone,
        departamento: {
          connect: {
            id: input.id_departamento,
          },
        },
        User: {
          create: {
            email: input.email,
            password: input.password,
            status: "professor",
          },
        },
      },
    });
    return professor;
  }
 * 

 async update(data: Partial<IUpdateProfessorUserDTO>): Promise<IProfessorDTO> {
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
    return await this.findBy({ id });
  }


 */
