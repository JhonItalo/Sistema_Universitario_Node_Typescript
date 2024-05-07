import { container } from 'tsyringe';
import ErrorHandle from '../../erros/ErrorHandle';
import { IHttpRequest, IHttpResponse } from '../../protocols/http';
import FindAlunoByCpfUseCase from '../../../modules/aluno/application/useCases/findAlunoByCpf/findAlunoByCpf.useCase';

class FindAlunoByCpfController {
	async handle(request: IHttpRequest): Promise<IHttpResponse> {
		const findAlunoByCpfUseCase = container.resolve(FindAlunoByCpfUseCase);
		try {
			const cpf = request.params.cpf;

			const aluno = await findAlunoByCpfUseCase.execute(cpf);

			const resolve = {
				reponse: aluno,
				error: null,
			};

			return { statusCode: 200, data: resolve };
		} catch (error) {
			return ErrorHandle(error);
		}
	}
}

export default FindAlunoByCpfController;
