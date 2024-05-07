import { inject, injectable } from 'tsyringe';
import { AlunoNotFound } from '../../../../../presentation/erros/Constants';
import DataNotFoundError from '../../../../../presentation/erros/DataNotFoundError';
import { IAlunoRepository } from '../../../domain/repositories/aluno.repository.interface';
import { IAlunoDTO } from '../../dtos/aluno.dto';

@injectable()
class FindAlunoByEmailUseCase {
	constructor(
		@inject('AlunoRepository')
		private alunoRepository: IAlunoRepository
	) {}
	async execute(email: string): Promise<IAlunoDTO> {
		const aluno = await this.alunoRepository.findBy({ email });

		if (!aluno) {
			throw new DataNotFoundError(AlunoNotFound);
		}
		return aluno;
	}
}
export default FindAlunoByEmailUseCase;
