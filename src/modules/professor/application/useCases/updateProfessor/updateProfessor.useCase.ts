import { inject, injectable } from 'tsyringe';
import { IProfessorRepository } from '../../../domain/repositories/professor.repository.interface';
import {
	IProfessorDTO,
	IUpdateProfessorDTO,
	IUpdateProfessorUserDTO,
} from '../../dtos/professor.dto';
import DataNotFoundError from '../../../../../presentation/erros/DataNotFoundError';
import { EmailAlreadyExists, ProfessorNotFound } from '../../../../../presentation/erros/Constants';
import DataConflictError from '../../../../../presentation/erros/DataConflictError';
import { IProfessorUserTransactions } from '../../transactions/professorUser.transactions';
import { IUserFacade } from '../../../../user/domain/facade/user.facade';

@injectable()
class UpdateProfessorUseCase {
	constructor(
		@inject('ProfessorRepository')
		private readonly professorRepository: IProfessorRepository,
		@inject('ProfessorUserTransactions')
		private readonly professorUserTransactions: IProfessorUserTransactions,
		@inject('UserFacade')
		private readonly userFacade: IUserFacade
	) {}

	async execute(input: IUpdateProfessorDTO): Promise<IProfessorDTO> {
		const professor = await this.professorRepository.findBy({ id: input.id });
		if (!professor) {
			throw new DataNotFoundError(ProfessorNotFound);
		}

		if (input.email) {
			const emailExist = await this.professorRepository.findBy({
				email: input.email,
			});

			const emailUserExist = await this.userFacade.findBy({ email: input.email });

			if (emailExist || emailUserExist) {
				throw new DataConflictError(EmailAlreadyExists);
			}
		}

		return this.professorUserTransactions.update({
			id: input.id,
			email: professor.email,
			updateProfessor: { ...input },
			updateUser: { email: input.email },
		});
	}
}

export default UpdateProfessorUseCase;
