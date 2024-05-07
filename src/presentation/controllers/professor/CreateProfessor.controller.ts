import { container } from 'tsyringe';
import ErrorHandle from '../../erros/ErrorHandle';

import { IHttpRequest, IHttpResponse } from '../../protocols/http';
import CreateProfessorUseCase from '../../../modules/professor/application/useCases/createProfessor/createProfessor.useCase';

class CreateProfessorController {
	async handle(request: IHttpRequest): Promise<IHttpResponse> {
		const createProfessorUseCase = container.resolve(CreateProfessorUseCase);

		try {
			const professor = request.body;

			const professorCreated = await createProfessorUseCase.execute(professor);

			return { statusCode: 201, data: { response: professorCreated, error: null } };
		} catch (error) {
			return ErrorHandle(error);
		}
	}
}
export default CreateProfessorController;
