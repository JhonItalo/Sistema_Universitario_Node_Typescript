import { inject, injectable } from 'tsyringe';
import { IAlunoRepository } from '../../../domain/repositories/aluno.repository.interface';
import { CpfAlreadyExists, EmailAlreadyExists } from '../../../../../presentation/erros/Constants';
import DataConflictError from '../../../../../presentation/erros/DataConflictError';
import { ICreateAlunoDTO, IAlunoDTO } from '../../dtos/aluno.dto';
import EncyptAdpater from '../../../../../infra/adapters/encrypt/encryptAdapter';
import { IUserFacade } from '../../../../user/domain/facade/user.facade';
import AlunoEntityFactory from '../../../domain/factory/factory.aluno.entity';
import { IAlunoUserTransactions } from '../../transactions/alunoUser.transactions';


@injectable()
class CreateAlunoUseCase {
	constructor(
		@inject('AlunoRepository')
		private readonly alunoRepository: IAlunoRepository,
		@inject('AlunoUserTransactions')
		private readonly alunoUserTransactions: IAlunoUserTransactions,
		@inject('Encrypt')
		private encrypt: EncyptAdpater,
		@inject('UserFacade')
		private userFacade: IUserFacade
	) {}

	async execute(input: ICreateAlunoDTO): Promise<IAlunoDTO> {
		const cpfExist = await this.alunoRepository.findBy({ cpf: input.cpf });

		if (cpfExist) {
			throw new DataConflictError(CpfAlreadyExists);
		}
		const emailExist = await this.alunoRepository.findBy({ email: input.email });

		if (emailExist) {
			throw new DataConflictError(EmailAlreadyExists);
		}
		const emailExistUser = await this.userFacade.findBy({ email: input.email });

		if (emailExistUser) {
			throw new DataConflictError(EmailAlreadyExists);
		}

		//const alunoEntity = AlunoEntityFactory.create(input);

		const password = await this.encrypt.generateHash(input.cpf + input.nome, 10);

		const alunocreated = await this.alunoUserTransactions.create({ ...input, password });

		return alunocreated as IAlunoDTO;
	}
}

export default CreateAlunoUseCase;
