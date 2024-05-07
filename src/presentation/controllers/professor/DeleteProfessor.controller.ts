import { container } from 'tsyringe';

import ErrorHandle from '../../erros/ErrorHandle';
import { IHttpRequest, IHttpResponse } from '../../protocols/http';
import DeleteProfessorUseCase from '../../../modules/professor/application/useCases/deleteProfessor/deleteProfessor.useCase';

class DeleteProfessorController {
	async handle(request: IHttpRequest): Promise<IHttpResponse> {
		const deleteProfessorUsecase = container.resolve(DeleteProfessorUseCase);
		try {
			const { id } = request.body;
			await deleteProfessorUsecase.execute(id);
			return { statusCode: 204, data: {} };
		} catch (error) {
			return ErrorHandle(error);
		}
	}
}
export default DeleteProfessorController;
