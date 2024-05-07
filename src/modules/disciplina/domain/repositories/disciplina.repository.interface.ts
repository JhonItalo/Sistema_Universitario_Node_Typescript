import {
	IDisciplinaDTO,
	ICreateDisciplinaDTO,
	IUpdateDisciplinaDTO,
} from '../../application/dtos/disciplina.dto';
import { Disciplina } from '@prisma/client';

interface IDisciplinaRepository {
	create(data: ICreateDisciplinaDTO): Promise<Disciplina>;

	update(data: IUpdateDisciplinaDTO): Promise<Disciplina>;

	delete(id: number): Promise<void>;

	findBy(data: Partial<IDisciplinaDTO>, include?: any): Promise<Disciplina>;

	findByMany(data: Partial<IDisciplinaDTO>, include?: any): Promise<Disciplina[]>;

	findAll(): Promise<Disciplina[]>;
}
export { IDisciplinaRepository };
