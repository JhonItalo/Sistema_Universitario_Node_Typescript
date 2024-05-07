import { container } from 'tsyringe';
import ErrorHandle from '../../erros/ErrorHandle';
import { IHttpResponse } from '../../protocols/http';
import ListDisciplinaUsecase from '../../../modules/disciplina/application/useCases/listDisciplina/listDisciplina.useCase';

class ListDisciplinaController {
	async handle(): Promise<IHttpResponse> {
		const listDisciplinaUseCase = container.resolve(ListDisciplinaUsecase);
		try {
			const cursos = await listDisciplinaUseCase.execute();

			return { statusCode: 200, data: { response: cursos, error: null } };
		} catch (error) {
			return ErrorHandle(error);
		}
	}
}
export default ListDisciplinaController;
