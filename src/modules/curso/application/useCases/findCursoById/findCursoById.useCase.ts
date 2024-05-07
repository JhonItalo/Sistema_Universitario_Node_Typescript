import { inject, injectable } from 'tsyringe';
import { ICursoRepository } from '../../../domain/repositories/curso.repository.interface';
import { ICursoDTO } from '../../dtos/curso.dto';

@injectable()
class FindCursoByIdUseCase {
	constructor(
		@inject('CursoRepository')
		private readonly cursoRepository: ICursoRepository
	) {}

	async execute(id: number): Promise<ICursoDTO> {
		const curso = await this.cursoRepository.findBy({ id });
		if (!curso) {
			return null;
		}
		return curso as ICursoDTO;
	}
}
export default FindCursoByIdUseCase;
