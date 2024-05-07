import { container } from 'tsyringe';
import ErrorHandle from '../../erros/ErrorHandle';
import { IHttpRequest, IHttpResponse } from '../../protocols/http';
import DeleteDisciplinaUseCase from '../../../modules/disciplina/application/useCases/deleteDisciplina/deleteDisciplina.useCase';

class DeleteDisciplinaController {
	async handle(request: IHttpRequest): Promise<IHttpResponse> {
		const { id } = request.body;
		const deleteDisciplinaUseCase = container.resolve(DeleteDisciplinaUseCase);
		try {
			await deleteDisciplinaUseCase.execute(id);
			return { statusCode: 204, data: {} };
		} catch (error) {
			return ErrorHandle(error);
		}
	}
}

export default DeleteDisciplinaController;
