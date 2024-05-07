import { inject, injectable } from 'tsyringe';
import { AlunoNotFound } from '../../../../../presentation/erros/Constants';
import DataNotFoundError from '../../../../../presentation/erros/DataNotFoundError';
import { IAlunoRepository } from '../../../domain/repositories/aluno.repository.interface';
import { IAlunoDTO } from '../../dtos/aluno.dto';

@injectable()
class FindAlunoByCpfUseCase {
	constructor(
		@inject('AlunoRepository')
		private readonly alunoRepository: IAlunoRepository
	) {}
	async execute(cpf: string): Promise<IAlunoDTO> {
		const aluno = await this.alunoRepository.findBy({ cpf });
		if (!aluno) {
			throw new DataNotFoundError(AlunoNotFound);
		}
		return aluno as IAlunoDTO;
	}
}
export default FindAlunoByCpfUseCase;
