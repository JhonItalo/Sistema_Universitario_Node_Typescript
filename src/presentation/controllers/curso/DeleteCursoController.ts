import { container } from 'tsyringe';
import ErrorHandle from '../../erros/ErrorHandle';
import { IHttpRequest, IHttpResponse } from '../../protocols/http';
import DeleteCursoUseCase from '../../../modules/curso/application/useCases/deleteCurso/deleteCurso.useCase';

class DeleteCursoController {
	async handle(request: IHttpRequest): Promise<IHttpResponse> {
		try {
			const deleteCursoUseCase = container.resolve(DeleteCursoUseCase);

			const { id } = request.body;

			await deleteCursoUseCase.execute(id);

			return { statusCode: 204, data: {} };
		} catch (error) {
			return ErrorHandle(error);
		}
	}
}
export default DeleteCursoController;
