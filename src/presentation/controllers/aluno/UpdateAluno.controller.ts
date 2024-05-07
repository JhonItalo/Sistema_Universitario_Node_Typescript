import { container } from 'tsyringe';
import ErrorHandle from '../../erros/ErrorHandle';
import { IHttpRequest, IHttpResponse } from '../../protocols/http';
import UpdateAlunoUseCase from '../../../modules/aluno/application/useCases/updateAluno/updateAluno.useCase';

class UpdateAlunoController {
	async handle(request: IHttpRequest): Promise<IHttpResponse> {
		const updateAlunoUseCase = container.resolve(UpdateAlunoUseCase);
		try {
			const aluno = request.body;

			const alunoUpdated = await updateAlunoUseCase.execute({ ...aluno });

			return { statusCode: 200, data: { response: alunoUpdated, error: null } };
		} catch (error) {
			return ErrorHandle(error);
		}
	}
}
export default UpdateAlunoController;
