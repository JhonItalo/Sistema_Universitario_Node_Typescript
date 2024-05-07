import { inject, injectable } from 'tsyringe';
import { IDisciplinaRepository } from '../../../domain/repositories/disciplina.repository.interface';
import { IDisciplinaDTO, IUpdateDisciplinaDTO } from '../../dtos/disciplina.dto';
import DataNotFoundError from '../../../../../presentation/erros/DataNotFoundError';
import {
	DisciplinaAlreadyExists,
	DisciplinaNotFound,
} from '../../../../../presentation/erros/Constants';
import DataConflictError from '../../../../../presentation/erros/DataConflictError';

@injectable()
class UpdateDisciplinaUseCase {
	constructor(
		@inject('DisciplinaRepository')
		private disciplinaRepository: IDisciplinaRepository
	) {}

	async execute({ id, nome, carga_horaria }: IUpdateDisciplinaDTO): Promise<IDisciplinaDTO> {
		if (!nome && !carga_horaria) {
			throw new Error('Requisição inválida');
		}

		const disciplina = await this.disciplinaRepository.findBy({ id });
		if (!disciplina) {
			throw new DataNotFoundError(DisciplinaNotFound);
		}

		if (nome) {
			const disciplinaExits = await this.disciplinaRepository.findBy({ nome });

			if (disciplinaExits) {
				throw new DataConflictError(DisciplinaAlreadyExists);
			}
		}

		return (await this.disciplinaRepository.update({
			id,
			nome,
			carga_horaria,
		})) as IDisciplinaDTO;
	}
}
export default UpdateDisciplinaUseCase;
