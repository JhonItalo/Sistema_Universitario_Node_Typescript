import { inject, injectable } from 'tsyringe';
import IUserRepository from '../../../domain/repositories/user.repository.interface';
import { IUserDTO } from '../../dtos/user.dto';

@injectable()
export default class FindUserUseCase {
	constructor(
		@inject('UserRepository')
		private userRepository: IUserRepository
	) {}
	async execute(input: Partial<IUserDTO>): Promise<Partial<IUserDTO>> {
		const user = await this.userRepository.findBy({ ...input });

		if (user) {
			return user;
		}

		return null;
	}
}
