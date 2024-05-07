import { container } from 'tsyringe';

import ErrorHandle from '../../erros/ErrorHandle';
import { IHttpResponse } from '../../protocols/http';
import ListProfessorUseCase from '../../../modules/professor/application/useCases/listProfessor/listProfessor.useCase';

class ListProfessorController {
	async handle(): Promise<IHttpResponse> {
		const listProfessorUseCase = container.resolve(ListProfessorUseCase);
		try {
			const professor = await listProfessorUseCase.execute();

			return { statusCode: 200, data: { response: professor, error: null } };
		} catch (error) {
			return ErrorHandle(error);
		}
	}
}
export default ListProfessorController;
