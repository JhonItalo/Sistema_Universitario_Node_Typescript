import { inject, injectable } from 'tsyringe';
import { ITurmaRepository } from '../../../domain/repositories/turma.repository.interface';
import { ITurmaDTO, IUpdateTurmaDTO } from '../../dtos/turma.dto';
import DataNotFoundError from '../../../../../presentation/erros/DataNotFoundError';
import { TurmaAlreadyExists, TurmaNotFound } from '../../../../../presentation/erros/Constants';
import DataConflictError from '../../../../../presentation/erros/DataConflictError';

@injectable()
class UpdateTurmaUseCase {
	constructor(
		@inject('TurmaRepository')
		private readonly turmaRepository: ITurmaRepository
	) {}

	async execute({ id, nome, id_curso }: IUpdateTurmaDTO): Promise<ITurmaDTO> {
		if (!nome && !id_curso) {
			throw new Error('Requisição inválida');
		}

		const turma = await this.turmaRepository.findBy({ id });
		if (!turma) {
			throw new DataNotFoundError(TurmaNotFound);
		}

		const turmaExits = await this.turmaRepository.findBy({
			nome: nome ? nome : turma.nome,
			id_curso: id_curso ? id_curso : turma.id_curso,
		});

		if (turmaExits) {
			throw new DataConflictError(TurmaAlreadyExists);
		}

		return (await this.turmaRepository.update({ id, nome, id_curso })) as ITurmaDTO;
	}
}
export default UpdateTurmaUseCase;
