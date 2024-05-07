import { container } from 'tsyringe';
import ErrorHandle from '../../erros/ErrorHandle';
import { IHttpRequest, IHttpResponse } from '../../protocols/http';
import DeleteAlunoUseCase from '../../../modules/aluno/application/useCases/deleteAluno/deleteAluno.useCase';

class DeleteAlunoController {
	async handle(request: IHttpRequest): Promise<IHttpResponse> {
		const deleteAlunoUsecase = container.resolve(DeleteAlunoUseCase);
		try {
			const { id } = request.body;
			await deleteAlunoUsecase.execute(id);
			return { statusCode: 204, data: {} };
		} catch (error) {
			return ErrorHandle(error);
		}
	}
}
export default DeleteAlunoController;
