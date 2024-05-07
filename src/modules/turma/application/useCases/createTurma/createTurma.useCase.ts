import { inject, injectable } from 'tsyringe';
import { ITurmaRepository } from '../../../domain/repositories/turma.repository.interface';
import { ICreateTurmaDTO, ITurmaDTO } from '../../dtos/turma.dto';
import { TurmaAlreadyExists } from '../../../../../presentation/erros/Constants';
import DataConflictError from '../../../../../presentation/erros/DataConflictError';

@injectable()
class CreateTurmaoUsecase {
	constructor(
		@inject('TurmaRepository')
		private readonly turmaRepository: ITurmaRepository
	) {}

	async execute({ nome, id_curso }: ICreateTurmaDTO): Promise<ITurmaDTO> {
		const turmaExits = await this.turmaRepository.findBy({ nome, id_curso });

		if (turmaExits) {
			throw new DataConflictError(TurmaAlreadyExists);
		}
		return await this.turmaRepository.create({ nome, id_curso });
	}
}
export default CreateTurmaoUsecase;
