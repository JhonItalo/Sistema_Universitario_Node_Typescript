import { ICreateAlunoUserDTO, IUpdateAlunoUserDTO } from '../dtos/aluno.dto';
import { prisma } from '../../../../infra/database/prismaClient';
import { Aluno } from '@prisma/client';

export interface IAlunoUserTransactions {
	create(input: ICreateAlunoUserDTO): Promise<Aluno>;

	update(input: IUpdateAlunoUserDTO): Promise<Aluno>;
}

export default class AlunoUserTransactions implements IAlunoUserTransactions {
	private prisma: typeof prisma.aluno;

	constructor() {
		this.prisma = prisma.aluno;
	}

	async create(input: ICreateAlunoUserDTO): Promise<Aluno> {
		return await this.prisma.create({
			data: {
				nome: input.nome,
				email: input.email,
				cpf: input.cpf,
				sexo: input.sexo,
				telefone: input.telefone,
				turma: {
					connect: {
						id: input.id_turma,
					},
				},
				curso: {
					connect: {
						id: input.id_curso,
					},
				},
				User: {
					create: {
						email: input.email,
						password: input.password,
						status: 'aluno',
					},
				},
			},
		});
	}

	async update(input: IUpdateAlunoUserDTO): Promise<Aluno> {
		await this.prisma.update({
			where: {
				id: input.id,
			},
			data: {
				...input.updateAluno,
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
