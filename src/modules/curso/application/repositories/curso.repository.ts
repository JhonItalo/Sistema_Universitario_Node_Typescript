import { ICursoRepository } from '../../domain/repositories/curso.repository.interface';
import { prisma } from '../../../../infra/database/prismaClient';
import { ICreateCursoDTO, ICursoDTO, IUpdateCursoDTO } from '../dtos/curso.dto';
import { Curso } from '@prisma/client';

class CursoRepository implements ICursoRepository {
	private prisma: typeof prisma.curso;

	constructor() {
		this.prisma = prisma.curso;
	}

	async create({ nome, id_departamento }: ICreateCursoDTO): Promise<Curso> {
		return await this.prisma.create({
			data: {
				nome: nome,
				departamento: {
					connect: {
						id: id_departamento,
					},
				},
			},
		});
	}

	async findBy(data: Partial<ICursoDTO>, include?: any): Promise<Curso> {
		return await this.prisma.findFirst({
			where: {
				...data,
			},
			include,
		});
	}

	async findByMany(data: Partial<ICursoDTO>, include?: any): Promise<Curso[]> {
		return await this.prisma.findMany({
			where: {
				...data,
			},
			include,
		});
	}

	async delete(data: number): Promise<void> {
		await this.prisma.delete({
			where: {
				id: data,
			},
		});
		return;
	}

	async update({ id, ...update }: IUpdateCursoDTO): Promise<Curso> {
		return await this.prisma.update({
			where: {
				id,
			},
			data: {
				...update,
			},
		});
	}

	async findAll(): Promise<Curso[]> {
		return await this.prisma.findMany({
			include: {
				departamento: true,
			},
		});
	}
}
export default CursoRepository;
