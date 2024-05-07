import { inject, injectable } from 'tsyringe';
import { IAlunoRepository } from '../../../domain/repositories/aluno.repository.interface';
import DataNotFoundError from '../../../../../presentation/erros/DataNotFoundError';
import { AlunoNotFound } from '../../../../../presentation/erros/Constants';

@injectable()
class DeleteAlunoUseCase {
	constructor(
		@inject('AlunoRepository')
		private alunoRepository: IAlunoRepository
	) {}

	async execute(id: string): Promise<void> {
		const alunoExists = await this.alunoRepository.findBy({ id });

		if (!alunoExists) {
			throw new DataNotFoundError(AlunoNotFound);
		}
		await this.alunoRepository.delete(id);

		return;
	}
}

export default DeleteAlunoUseCase;
