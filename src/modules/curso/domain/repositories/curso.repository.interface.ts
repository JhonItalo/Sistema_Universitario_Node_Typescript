import { ICreateCursoDTO, ICursoDTO, IUpdateCursoDTO } from '../../application/dtos/curso.dto';
import { Curso } from '@prisma/client';

export interface ICursoRepository {
	create(data: ICreateCursoDTO): Promise<Curso>;

	update(data: IUpdateCursoDTO): Promise<Curso>;

	delete(data: number): Promise<void>;

	findBy(data: Partial<ICursoDTO>, include?: any): Promise<Curso>;

	findByMany(data: Partial<ICursoDTO>, include?: any): Promise<Curso[]>;

	findAll(): Promise<Curso[]>;
}
