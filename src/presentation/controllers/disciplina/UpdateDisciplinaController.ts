import { container } from 'tsyringe';
import ErrorHandle from '../../erros/ErrorHandle';
import { IHttpRequest, IHttpResponse } from '../../protocols/http';
import UpdateDisciplinaUseCase from '../../../modules/disciplina/application/useCases/updateDisciplina/updateDisciplina.useCase';

class UpdateDisciplinaController {
	async handle(request: IHttpRequest): Promise<IHttpResponse> {
		const { id, nome, carga_horaria } = request.body;

		const updateDisciplinaUseCase = container.resolve(UpdateDisciplinaUseCase);

		try {
			const update = await updateDisciplinaUseCase.execute({ id, nome, carga_horaria });

			return { statusCode: 200, data: { response: update, error: null } };
		} catch (error) {
			return ErrorHandle(error);
		}
	}
}

export default UpdateDisciplinaController;
