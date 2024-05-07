import { sign } from 'jsonwebtoken';
import { compare } from 'bcrypt';
import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '../../../../domain/repositories/IUserRepository';
import UnauthorizedError from '../../../../presentation/erros/UnauthorizedError';
import EncyptAdpater from '../../../../infra/adapters/encrypt/encryptAdapter';

@injectable()
class AuthUserUseCase {
	constructor(
		@inject('UserRepository')
		private readonly userRepository: IUserRepository,
		@inject('Encrypt')
		private encrypt: EncyptAdpater
	) {}

	async execute(email: string, password: string): Promise<string> {
		const user = await this.userRepository.find ({ email });

		if (!user) {
			throw new UnauthorizedError('Email ou senha incorreto');
		}

		const passwordValidation = await compare(password, user.password);

		if (!passwordValidation) {
			throw new UnauthorizedError('Email ou senha incorreto');
		}

		let status_id: string;
		if (user.status === 'aluno') {
			status_id = user.id_aluno;
		}

		if (user.status === 'professor') {
			status_id = user.id_professor;
		}

		if (user.status === 'departamento') {
			status_id = user.id_departamento.toString();
		}

		const token = sign({}, `${process.env.SC_KEY}`, {
			subject: status_id,
			expiresIn: '10d',
		});
		return {
			token: token,
		};
	}
}
export default AuthUserUseCase;
