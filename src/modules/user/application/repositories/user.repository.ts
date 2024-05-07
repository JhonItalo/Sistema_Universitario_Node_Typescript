import { User } from '@prisma/client';
import { prisma } from '../../../../infra/database/prismaClient';
import IUserRepository from '../../domain/repositories/user.repository.interface';
import { IUserDTO } from '../dtos/user.dto';

export default class UserRepository implements IUserRepository {
	private prisma: typeof prisma.user;
	constructor() {
		this.prisma = prisma.user;
	}

	async findBy(input: Partial<IUserDTO>): Promise<Partial<User>> {
		return await this.prisma.findFirst({
			where: {
				...input,
			},
			select: {
				id: true,
				email: true,
				status: true,
				id_departamento: true,
				id_professor: true,
				id_aluno: true,
			},
		});
	}

	async findByStatusId(input: Partial<IUserDTO>): Promise<Partial<User>> {
		return await this.prisma.findFirst({
			where: {
				OR: [
					{
						id_aluno: input.id_aluno,
					},
					{
						id_professor: input.id_professor,
					},
					{
						id_departamento: input.id_departamento,
					},
				],
			},
			select: {
				email: true,
				status: true,
			},
		});
	}

	async findByEmailWithPassword(id: string): Promise<User> {
		return await this.prisma.findFirst({
			where: {
				id,
			},
		});
	}
}
/**
 * async create(input: ICreateUserDTO): Promise<Partial<User>> {
		return await this.prisma.user.create({
			data: {
				email: input.email,
				password: input.password,
				status: input.status,
				id_aluno: input.id_aluno,
				id_professor: input.id_professor,
				id_departamento: input.id_departamento,
			},
			select: {
				id: true,
				email: true,
				status: true,
				id_departamento: true,
				id_professor: true,
				id_aluno: true,
			},
		});
	}

	async update(input: IUpdateUserDTO): Promise<Partial<User>> {
		return await this.prisma.user.update({
			where: { id: input.id },
			data: {
				email: input.email,
				password: input.password,
			},
			select: {
				id: true,
				email: true,
				status: true,
				id_departamento: true,
				id_professor: true,
				id_aluno: true,
			},
		});
	}
	async delete(id: string): Promise<void> {
		await this.prisma.user.delete({
			where: { id },
		});
		return;
	}
 * 
 * 
 * 
 */
