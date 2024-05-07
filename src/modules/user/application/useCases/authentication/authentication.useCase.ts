import { inject } from 'tsyringe';
import UnauthorizedError from '../../../../../presentation/erros/UnauthorizedError';
import jwtAuth from '../../../../../infra/adapters/jwt.auth/jwt.adapter';
import IUserRepository from '../../../domain/repositories/user.repository.interface';

interface IJwt {
	sub: string;
}
interface userMin {
	status_id: string;
	status: string;
}

export default class AuthenticationUseCase {
	constructor(
		@inject('UserRepository')
		private readonly userRepository: IUserRepository,
		@inject('JwtAuth')
		private readonly jwtAuth: jwtAuth
	) {}

	async execute(token: string): Promise<userMin> {
		if (!token) {
			throw new UnauthorizedError('Token não fornecido');
		}
		let user_id: string;

		try {
			const { sub } = this.jwtAuth.verify(token) as IJwt;

			user_id = sub;
		} catch (error) {
			throw new UnauthorizedError('Falha na autenticação');
		}

		const user = await this.userRepository.findBy({ id: user_id });

		if (!user) {
			throw new UnauthorizedError('Falha na autenticação');
		}
		return {
			status_id: user_id,
			status: user.status,
		};
	}
}
