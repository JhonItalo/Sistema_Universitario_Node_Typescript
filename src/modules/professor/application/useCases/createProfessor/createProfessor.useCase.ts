import { inject, injectable } from 'tsyringe';
import { ICreateProfessorDTO, IProfessorDTO } from '../../dtos/professor.dto';
import DataConflictError from '../../../../../presentation/erros/DataConflictError';
import { CpfAlreadyExists, EmailAlreadyExists } from '../../../../../presentation/erros/Constants';
import EncyptAdpater from '../../../../../infra/adapters/encrypt/encryptAdapter';
import { IUserFacade } from '../../../../user/domain/facade/user.facade';
import { IProfessorUserTransactions } from '../../transactions/professorUser.transactions';
import { IProfessorRepository } from '../../../domain/repositories/professor.repository.interface';

@injectable()
class CreateProfessorUseCase {
	constructor(
		@inject('ProfessorRepository')
		private readonly professorRepository: IProfessorRepository,
		@inject('ProfessorUserTransactions')
		private readonly professorUserTransactions: IProfessorUserTransactions,
		@inject('UserFacade')
		private readonly userFacade: IUserFacade,
		@inject('Encrypt')
		private readonly encrypt: EncyptAdpater
	) {}

	async execute(input: ICreateProfessorDTO): Promise<IProfessorDTO> {
		const cpfExist = await this.professorRepository.findBy({ cpf: input.cpf });

		if (cpfExist) {
			throw new DataConflictError(CpfAlreadyExists);
		}
		const emailExist = await this.professorRepository.findBy({
			email: input.email,
		});

		if (emailExist) {
			throw new DataConflictError(EmailAlreadyExists);
		}

		const emailExistUser = await this.userFacade.findBy({ email: input.email });

		if (emailExistUser) {
			throw new DataConflictError(EmailAlreadyExists);
		}

		const password = await this.encrypt.generateHash(input.cpf + input.nome, 10);

		return (await this.professorUserTransactions.create({
			...input,
			password,
		})) as IProfessorDTO;
	}
}

export default CreateProfessorUseCase;
