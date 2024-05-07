import { container } from 'tsyringe';
import ErrorHandle from '../../erros/ErrorHandle';
import { IHttpResponse } from '../../protocols/http';
import ListAlunoUseCase from '../../../modules/aluno/application/useCases/listAluno/listAluno.useCase';

class ListAlunoController {
	async handle(): Promise<IHttpResponse> {
		const listAlunoUseCase = container.resolve(ListAlunoUseCase);

		try {
			const list = await listAlunoUseCase.execute();

			return { statusCode: 200, data: { response: list, error: null } };
		} catch (error) {
			return ErrorHandle(error);
		}
	}
}

export default ListAlunoController;
