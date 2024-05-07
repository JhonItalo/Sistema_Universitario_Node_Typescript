import { inject, injectable } from 'tsyringe';
import { IProfessorRepository } from '../../../domain/repositories/professor.repository.interface';
import { IProfessorDTO } from '../../dtos/professor.dto';
import DataNotFoundError from '../../../../../presentation/erros/DataNotFoundError';
import { ProfessorNotFound } from '../../../../../presentation/erros/Constants';

@injectable()
class FindProfessorByCpfUseCase {
	constructor(
		@inject('ProfessorRepository')
		private readonly professorRepository: IProfessorRepository
	) {}
	async execute(cpf: string): Promise<IProfessorDTO> {
		const professor = await this.professorRepository.findBy({ cpf });

		if (!professor) {
			throw new DataNotFoundError(ProfessorNotFound);
		}

		return professor;
	}
}

export default FindProfessorByCpfUseCase;
