import { IAlunoRepository } from '../../domain/repositories/aluno.repository.interface';
import { Aluno } from '@prisma/client';
import { prisma } from '../../../../infra/database/prismaClient';
import { IAlunoDTO } from '../dtos/aluno.dto';

class AlunoRepository implements IAlunoRepository {
	private prisma: typeof prisma.aluno;

	constructor() {
		this.prisma = prisma.aluno;
	}

	async findBy(input: Partial<IAlunoDTO>, include?: any): Promise<Aluno> {
		return await this.prisma.findFirst({
			where: {
				...input,
			},
			include,
		});
	}

	async findByMany(input: Partial<IAlunoDTO>, include?: any): Promise<Aluno[]> {
		return await this.prisma.findMany({
			where: {
				...input,
			},
			include,
		});
	}

	async delete(id: string): Promise<void> {
		await this.prisma.delete({
			where: { id },
		});

		return;
	}

	async findAll(): Promise<Aluno[]> {
		return await this.prisma.findMany();
	}
}
export default AlunoRepository;
/**
 * 
 * 

	async create({
		nome,
		email,
		cpf,
		sexo,
		telefone,
		id_turma,
		id_curso,
	}: ICreateAlunoDTO): Promise<Aluno> {
		return await this.prisma.create({
			data: {
				nome: nome,
				email: email,
				cpf: cpf,
				sexo: sexo,
				telefone: telefone,
				turma: {
					connect: {
						id: id_turma,
					},
				},
				curso: {
					connect: {
						id: id_curso,
					},
				},
			},
		});
	}




async update(updateAluno: IUpdateAlunoDTO): Promise<Aluno> {
		await this.prisma.update({
			where: {
				id: updateAluno.id,
			},
			data: {
				...updateAluno,
			},
		});
		return await this.findBy({ id: updateAluno.id });
	}


 */
