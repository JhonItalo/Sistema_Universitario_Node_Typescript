import { inject, injectable } from 'tsyringe';
import { ITurmaRepository } from '../../../domain/repositories/turma.repository.interface';
import DataNotFoundError from '../../../../../presentation/erros/DataNotFoundError';
import { TurmaNotFound } from '../../../../../presentation/erros/Constants';

@injectable()
class DeleteTurmaUseCase {
	constructor(
		@inject('TurmaRepository')
		private readonly turmaRepository: ITurmaRepository
	) {}

	async execute(id: number): Promise<void> {
		const turma = await this.turmaRepository.findBy({ id });
		if (!turma) {
			throw new DataNotFoundError(TurmaNotFound);
		}
		await this.turmaRepository.delete(id);
	}
}

export default DeleteTurmaUseCase;
