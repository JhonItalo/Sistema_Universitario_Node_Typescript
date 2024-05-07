import { inject, injectable } from 'tsyringe';
import { IProfessorRepository } from '../../../domain/repositories/professor.repository.interface';
import { IProfessorDTO } from '../../dtos/professor.dto';

@injectable()
class ListProfessorUseCase {
	constructor(
		@inject('ProfessorRepository')
		private readonly professorRepository: IProfessorRepository
	) {}

	async execute(): Promise<IProfessorDTO[]> {
		return (await this.professorRepository.findAll()) as IProfessorDTO[];
	}
}

export default ListProfessorUseCase;
