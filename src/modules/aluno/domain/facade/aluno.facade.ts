import { IAlunoDTO } from '../../application/dtos/aluno.dto';

export default interface IAlunoFacade {
	findAluno(id: string): Promise<IAlunoDTO>;
	findAllAluno(): Promise<IAlunoDTO[]>;
}
