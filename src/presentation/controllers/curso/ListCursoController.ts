import { container } from 'tsyringe';
import ErrorHandle from '../../erros/ErrorHandle';
import { IHttpResponse } from '../../protocols/http';
import ListCursosUsecase from '../../../modules/curso/application/useCases/listCurso/listCurso.useCase';

class ListCursoController {
	async handle(): Promise<IHttpResponse> {
		const listCursosUseCase = container.resolve(ListCursosUsecase);
		try {
			const curso = await listCursosUseCase.execute();

			return { statusCode: 200, data: { response: curso, error: null } };
		} catch (error) {
			return ErrorHandle(error);
		}
	}
}
export default ListCursoController;
