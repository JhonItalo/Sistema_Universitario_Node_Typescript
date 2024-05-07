import { container } from 'tsyringe';
import ErrorHandle from '../../erros/ErrorHandle';
import { IHttpResponse } from '../../protocols/http';
import ListTurmaUsecase from '../../../modules/turma/application/useCases/listTurma/listTurma.useCase';

class ListTurmaController {
	async handle(): Promise<IHttpResponse> {
		const listTurmaUseCase = container.resolve(ListTurmaUsecase);
		try {
			const turma = await listTurmaUseCase.execute();

			return { statusCode: 200, data: { response: turma, error: null } };
		} catch (error) {
			return ErrorHandle(error);
		}
	}
}
export default ListTurmaController;
