import { injectable, inject } from 'tsyringe';
import { IDisciplinaRepository } from '../../../domain/repositories/disciplina.repository.interface';
import { ICreateDisciplinaDTO, IDisciplinaDTO } from '../../dtos/disciplina.dto';
import DataConflictError from '../../../../../presentation/erros/DataConflictError';
import { DisciplinaAlreadyExists } from '../../../../../presentation/erros/Constants';

@injectable()
class CreateDisciplinaUsecase {
	constructor(
		@inject('DisciplinaRepository')
		private readonly disciplinaRepository: IDisciplinaRepository
	) {}

	async execute({ nome, carga_horaria }: ICreateDisciplinaDTO): Promise<IDisciplinaDTO> {
		const disciplinaExists = await this.disciplinaRepository.findBy({ nome });

		if (disciplinaExists) {
			throw new DataConflictError(DisciplinaAlreadyExists);
		}

		return await this.disciplinaRepository.create({ nome, carga_horaria });
	}
}
export default CreateDisciplinaUsecase;
