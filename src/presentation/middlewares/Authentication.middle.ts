import { Response, Request, NextFunction } from 'express';
import { container } from 'tsyringe';
import UnauthorizedError from '../erros/UnauthorizedError';
import ErrorHandle from '../erros/ErrorHandle';
import AuthenticationUseCase from '../../modules/user/application/useCases/authentication/authentication.useCase';

interface ICustomRequest extends Request {
	customUser: {
		status_id: string;
		status: string | number;
	};
}

const Authentication = (allowedUsers: string[]) => {
	return async (request: ICustomRequest, response: Response, next: NextFunction) => {
		const authenticationUseCase = container.resolve(AuthenticationUseCase);

		try {
			const authHeader = request.headers.authorization;

			const [, token] = authHeader.split(' ');

			const { status_id, status } = await authenticationUseCase.execute(token);

			if (allowedUsers.indexOf(status) !== -1) {
				request.customUser = { status_id: status_id, status: status };

				next();
			} else {
				throw new UnauthorizedError('Falha na autenticação');
			}
		} catch (error) {
			const { statusCode, data } = ErrorHandle(error);
			return response.status(statusCode).json(data);
		}
	};
};

export default Authentication;
