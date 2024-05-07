import { injectable, inject } from 'tsyringe';
import { IAlunoRepository } from '../../../domain/repositories/aluno.repository.interface';
import { IAlunoDTO } from '../../dtos/aluno.dto';

@injectable()
class ListAlunoUseCase {
	constructor(
		@inject('AlunoRepository')
		private readonly alunoRepository: IAlunoRepository
	) {}

	async execute(): Promise<IAlunoDTO[]> {
		return (await this.alunoRepository.findAll()) as IAlunoDTO[];
	}
}

export default ListAlunoUseCase;
