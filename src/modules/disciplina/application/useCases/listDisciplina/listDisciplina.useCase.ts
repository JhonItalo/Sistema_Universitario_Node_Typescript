import { inject, injectable } from 'tsyringe';
import { IDisciplinaRepository } from '../../../domain/repositories/disciplina.repository.interface';
import { IDisciplinaDTO } from '../../dtos/disciplina.dto';

@injectable()
class ListDisciplinaUsecase {
	constructor(
		@inject('DisciplinaRepository')
		private readonly disciplinaRepository: IDisciplinaRepository
	) {}
	async execute(): Promise<IDisciplinaDTO[]> {
		return (await this.disciplinaRepository.findAll()) as IDisciplinaDTO[];
	}
}
export default ListDisciplinaUsecase;
