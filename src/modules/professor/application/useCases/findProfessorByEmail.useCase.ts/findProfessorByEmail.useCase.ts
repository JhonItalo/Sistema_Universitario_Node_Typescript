import { inject, injectable } from 'tsyringe';
import { IProfessorRepository } from '../../../domain/repositories/professor.repository.interface';
import { IProfessorDTO } from '../../dtos/professor.dto';
import DataNotFoundError from '../../../../../presentation/erros/DataNotFoundError';
import { ProfessorNotFound } from '../../../../../presentation/erros/Constants';

@injectable()
class FindProfessorByEmailUseCase {
	constructor(
		@inject('ProfessorRepository')
		private readonly professorRepository: IProfessorRepository
	) {}

	async execute(email: string): Promise<IProfessorDTO> {
		const professor = await this.professorRepository.findBy({ email });
		if (!professor) {
			throw new DataNotFoundError(ProfessorNotFound);
		}
		return professor;
	}
}
export default FindProfessorByEmailUseCase;
