import IUserRepository from '../../../domain/repositories/user.repository.interface';
import EncyptAdpater from '../../../../../infra/adapters/encrypt/encryptAdapter';
import { inject, injectable } from 'tsyringe';
import UnauthorizedError from '../../../../../presentation/erros/UnauthorizedError';
import jwtAuth from '../../../../../infra/adapters/jwt.auth/jwt.adapter';

@injectable()
class LoginUseCase {
	constructor(
		@inject('UserRepository')
		private readonly userRepository: IUserRepository,
		@inject('Encrypt')
		private encrypt: EncyptAdpater,
		@inject('JwtAuth')
		private readonly jwtAuth: jwtAuth
	) {}

	async execute(email: string, password: string): Promise<{ token: string }> {
		const user = await this.userRepository.findByEmailWithPassword(email);

		if (!user) {
			throw new UnauthorizedError('Email ou senha incorretos');
		}

		const passwordValidation = await this.encrypt.checkHash(password, user.password);

		if (!passwordValidation) {
			throw new UnauthorizedError('Email ou senha incorretos');
		}

		const token = this.jwtAuth.sign({
			payload: {},
			options: {
				subject: user.id,
				expiresIn: '10d',
			},
		});

		return {
			token: token,
		};
	}
}
export default LoginUseCase;
