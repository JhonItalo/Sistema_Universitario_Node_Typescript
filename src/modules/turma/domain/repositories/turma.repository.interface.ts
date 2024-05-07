import { ICreateTurmaDTO, ITurmaDTO, IUpdateTurmaDTO } from '../../application/dtos/turma.dto';
import { Turma } from '@prisma/client';

interface ITurmaRepository {
	create(data: ICreateTurmaDTO): Promise<Turma>;

	update(data: IUpdateTurmaDTO): Promise<Turma>;

	delete(id: number): Promise<void>;

	findBy(data: Partial<ITurmaDTO>, include?: any): Promise<Turma>;

	findByMany(data: Partial<ITurmaDTO>, include?: any): Promise<Turma[]>;

	findAll(): Promise<Turma[]>;
}
export { ITurmaRepository };
