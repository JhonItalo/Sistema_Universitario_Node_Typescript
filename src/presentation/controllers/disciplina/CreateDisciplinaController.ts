import { container } from 'tsyringe';
import ErrorHandle from '../../erros/ErrorHandle';
import { IHttpRequest, IHttpResponse } from '../../protocols/http';
import CreateDisciplinaUsecase from '../../../modules/disciplina/application/useCases/createDisciplina/createDisciplina.useCase';

class CreateDisciplinaController {
	async handle(request: IHttpRequest): Promise<IHttpResponse> {
		const { nome, carga_horaria } = request.body;
		const createDisciplinaUsecase = container.resolve(CreateDisciplinaUsecase);
		try {
			const disciplina = await createDisciplinaUsecase.execute({ nome, carga_horaria });

			return { statusCode: 201, data: { response: disciplina, error: null } };
		} catch (error) {
			return ErrorHandle(error);
		}
	}
}

export default CreateDisciplinaController;
