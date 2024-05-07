import { inject, injectable } from 'tsyringe';
import { ITurmaRepository } from '../../../domain/repositories/turma.repository.interface';
import { ITurmaDTO } from '../../dtos/turma.dto';

@injectable()
class ListTurmaUsecase {
	constructor(
		@inject('TurmaRepository')
		private readonly turmaRepository: ITurmaRepository
	) {}
	async execute(): Promise<ITurmaDTO[]> {
		return (await this.turmaRepository.findAll()) as ITurmaDTO[];
	}
}
export default ListTurmaUsecase;
