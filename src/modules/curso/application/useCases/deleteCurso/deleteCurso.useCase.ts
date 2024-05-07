import { injectable, inject } from 'tsyringe';
import { ICursoRepository } from '../../../domain/repositories/curso.repository.interface';
import DataNotFoundError from '../../../../../presentation/erros/DataNotFoundError';
import { CursoNotFound } from '../../../../../presentation/erros/Constants';

@injectable()
class DeleteCursoUseCase {
	constructor(
		@inject('CursoRepository')
		private readonly cursoRepository: ICursoRepository
	) {}

	async execute(id: number): Promise<void> {
		const curso = await this.cursoRepository.findBy({ id });
		if (!curso) {
			throw new DataNotFoundError(CursoNotFound);
		}
		await this.cursoRepository.delete(id);
		return;
	}
}

export default DeleteCursoUseCase;
