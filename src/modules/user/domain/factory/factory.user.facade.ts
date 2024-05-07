import { container } from 'tsyringe';
import UserFacade from '../facade/user.facade';

import FindUserUseCase from '../../application/useCases/findUser/findUser.useCase';

export default class UserFacadeFactory {
	static create() {
		/* 	const createUserUseCase = container.resolve(CreateUserUseCase); */
		const findUserUseCase = container.resolve(FindUserUseCase);
		/*  const updateUserUseCase = container.resolve();
    const findUserUseCase = container.resolve();
    const deleteUserUseCase = container.resolve(); */

		return new UserFacade({
			/* 			createUserUseCase, */
			findUserUseCase,
			/*  updateUserUseCase,
      findUserUseCase,
      deleteUserUseCase, */
		});
	}
}
