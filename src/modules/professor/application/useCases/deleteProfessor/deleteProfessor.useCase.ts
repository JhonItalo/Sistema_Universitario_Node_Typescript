import { inject, injectable } from 'tsyringe';
import { IProfessorRepository } from '../../../domain/repositories/professor.repository.interface';
import DataNotFoundError from '../../../../../presentation/erros/DataNotFoundError';
import { ProfessorNotFound } from '../../../../../presentation/erros/Constants';

@injectable()
class DeleteProfessorUseCase {
	constructor(
		@inject('ProfessorRepository')
		private readonly professorRepository: IProfessorRepository
	) {}

	async execute(id: string): Promise<void> {
		const professor = await this.professorRepository.findBy({ id });
		if (!professor) {
			throw new DataNotFoundError(ProfessorNotFound);
		}
		await this.professorRepository.delete(id);
		return;
	}
}

export default DeleteProfessorUseCase;
