import { container } from 'tsyringe';
import ErrorHandle from '../../erros/ErrorHandle';
import { IHttpRequest, IHttpResponse } from '../../protocols/http';
import UpdateProfessorUseCase from '../../../modules/professor/application/useCases/updateProfessor/updateProfessor.useCase';

class UpdateProfessorController {
	async handle(request: IHttpRequest): Promise<IHttpResponse> {
		const updateProfessorUseCase = container.resolve(UpdateProfessorUseCase);

		try {
			const professor = request.body;
			const professorUpdated = await updateProfessorUseCase.execute({
				...professor,
			});

			return { statusCode: 200, data: { response: professorUpdated, error: null } };
		} catch (error) {
			console.log(error, 'erorr');
			return ErrorHandle(error);
		}
	}
}

export default UpdateProfessorController;
