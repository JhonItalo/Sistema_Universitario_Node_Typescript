import { prisma } from '../../../../infra/database/prismaClient';
import { ICreateProfessorUserDTO, IUpdateProfessorUserDTO } from '../dtos/professor.dto';

import { Professor } from '@prisma/client';

export interface IProfessorUserTransactions {
	create(input: ICreateProfessorUserDTO): Promise<Professor>;

	update(input: IUpdateProfessorUserDTO): Promise<Professor>;
}

export default class ProfessorUserTransactions implements IProfessorUserTransactions {
	private prisma: typeof prisma.professor;

	constructor() {
		this.prisma = prisma.professor;
	}

	async create(input: ICreateProfessorUserDTO): Promise<Professor> {
		const professor = await this.prisma.create({
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
						status: 'professor',
					},
				},
			},
		});
		return professor;
	}

	async update(input: IUpdateProfessorUserDTO): Promise<Professor> {
		await this.prisma.update({
			where: {
				id: input.id,
			},
			data: {
				...input.updateProfessor,
				User: {
					update: {
						where: {
							email: input.email,
						},
						data: {
							...input.updateUser,
						},
					},
				},
			},
		});
		return await this.prisma.findFirst({
			where: {
				id: input.id,
			},
		});
	}
}
