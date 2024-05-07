import { container } from 'tsyringe';
import ErrorHandle from '../../erros/ErrorHandle';
import { IHttpRequest, IHttpResponse } from '../../protocols/http';
import CreateAlunoUseCase from '../../../modules/aluno/application/useCases/createAluno/createAluno.useCase';

class CreateAlunoController {
	async handle(request: IHttpRequest): Promise<IHttpResponse> {
		const createAlunoUseCase = container.resolve(CreateAlunoUseCase);
		try {
			const aluno = request.body;
			const alunoCreated = await createAlunoUseCase.execute(aluno);
			return { statusCode: 201, data: { response: alunoCreated, error: null } };
		} catch (error) {
			return ErrorHandle(error);
		}
	}
}

export default CreateAlunoController;
