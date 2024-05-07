import { container } from 'tsyringe';
import ErrorHandle from '../../erros/ErrorHandle';
import { IHttpRequest, IHttpResponse } from '../../protocols/http';
import FindProfessorByEmailUseCase from '../../../modules/professor/application/useCases/findProfessorByEmail.useCase.ts/findProfessorByEmail.useCase';

class FindProfessorByEmailController {
	async handle(request: IHttpRequest): Promise<IHttpResponse> {
		const findProfessorByEmailUseCase = container.resolve(FindProfessorByEmailUseCase);
		try {
			const { email } = request.params;
			const professor = await findProfessorByEmailUseCase.execute(email);

			const resolve = {
				response: professor,
				error: null,
			};
			return { statusCode: 200, data: resolve };
		} catch (error) {
			return ErrorHandle(error);
		}
	}
}
export default FindProfessorByEmailController;
