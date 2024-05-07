import { container } from 'tsyringe';
import ErrorHandle from '../../erros/ErrorHandle';
import { IHttpRequest, IHttpResponse } from '../../protocols/http';
import CreateCursoUsecase from '../../../modules/curso/application/useCases/createCurso/createCurso.useCase';

class CreateCursoController {
	async handle(request: IHttpRequest): Promise<IHttpResponse> {
		const createCursoUseCase = container.resolve(CreateCursoUsecase);
		try {
			const { nome, id_departamento } = request.body;

			const curso = await createCursoUseCase.execute({ nome, id_departamento });

			return { statusCode: 201, data: { response: curso, error: null } };
		} catch (error) {
			return ErrorHandle(error);
		}
	}
}

export default CreateCursoController;
