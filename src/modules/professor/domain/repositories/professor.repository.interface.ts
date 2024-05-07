import { IProfessorDTO } from '../../application/dtos/professor.dto';
import { Professor } from '@prisma/client';

interface IProfessorRepository {
	delete(id: string): Promise<void>;

	findBy(input: Partial<IProfessorDTO>, include?: any): Promise<Professor>;

	findByMany(input: Partial<IProfessorDTO>, include?: any): Promise<Professor[]>;

	findAll(): Promise<Professor[]>;
}
export { IProfessorRepository };
/**
 * 
 * create(input: ICreateProfessorUserDTO): Promise<IProfessorDTO>;

	update(input: IUpdateProfessorUserDTO): Promise<IProfessorDTO>;

 * 
 * 
 */
