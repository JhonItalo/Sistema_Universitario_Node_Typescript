import { inject, injectable } from 'tsyringe';
import { IAlunoRepository } from '../../../domain/repositories/aluno.repository.interface';
import { IAlunoDTO, IUpdateAlunoDTO } from '../../dtos/aluno.dto';
import DataNotFoundError from '../../../../../presentation/erros/DataNotFoundError';
import { AlunoNotFound, EmailAlreadyExists } from '../../../../../presentation/erros/Constants';
import DataConflictError from '../../../../../presentation/erros/DataConflictError';
import { IAlunoUserTransactions } from '../../transactions/alunoUser.transactions';
import { IUserFacade } from '../../../../user/domain/facade/user.facade';

@injectable()
class UpdateAlunoUseCase {
	constructor(
		@inject('AlunoRepository')
		private readonly alunoRepository: IAlunoRepository,
		@inject('AlunoUserTransactions')
		private readonly alunoUserTransactions: IAlunoUserTransactions,
		@inject('UserFacade')
		private readonly userFacade: IUserFacade
	) {}

	async execute(input: IUpdateAlunoDTO): Promise<IAlunoDTO> {
		const aluno = await this.alunoRepository.findBy({ id: input.id });
		if (!aluno) {
			throw new DataNotFoundError(AlunoNotFound);
		}

		if (input.email) {
			const emailExist = await this.alunoRepository.findBy({
				email: input.email,
			});
			const emailUserExist = await this.userFacade.findBy({ email: input.email });

			if (emailExist || emailUserExist) {
				throw new DataConflictError(EmailAlreadyExists);
			}
		}

		const alunoUpdated = await this.alunoUserTransactions.update({
			id: input.id,
			email: aluno.email,
			updateAluno: { ...input },
			updateUser: { email: input.email },
		});

		return alunoUpdated as IAlunoDTO;
	}
}

export default UpdateAlunoUseCase;
