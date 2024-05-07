import { injectable, inject } from 'tsyringe';
import { IDisciplinaRepository } from '../../../domain/repositories/disciplina.repository.interface';
import DataNotFoundError from '../../../../../presentation/erros/DataNotFoundError';
import { DisciplinaNotFound } from '../../../../../presentation/erros/Constants';

@injectable()
class DeleteDisciplinaUseCase {
	constructor(
		@inject('DisciplinaRepository')
		private readonly disciplinaRepository: IDisciplinaRepository
	) {}

	async execute(id: number): Promise<void> {
		const disciplina = await this.disciplinaRepository.findBy({ id });
		if (!disciplina) {
			throw new DataNotFoundError(DisciplinaNotFound);
		}
		return await this.disciplinaRepository.delete(id);
	}
}

export default DeleteDisciplinaUseCase;
