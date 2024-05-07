import { Aluno } from '@prisma/client';
import { IAlunoDTO } from '../../application/dtos/aluno.dto';

interface IAlunoRepository {
	delete(data: string): Promise<void>;

	findBy(data: Partial<IAlunoDTO>, include?: any): Promise<Aluno>;

	findByMany(data: Partial<IAlunoDTO>, include?: any): Promise<Aluno[]>;

	findAll(): Promise<Aluno[]>;
}
export { IAlunoRepository };

//create(data: ICreateAlunoDTO): Promise<IAlunoDTO>;

//update(data: IUpdateAlunoDTO): Promise<IAlunoDTO>;
