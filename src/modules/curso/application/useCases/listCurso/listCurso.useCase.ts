import { inject, injectable } from 'tsyringe';
import { ICursoRepository } from '../../../domain/repositories/curso.repository.interface';
import { ICursoDTO } from '../../dtos/curso.dto';

@injectable()
class ListCursosUsecase {
	constructor(
		@inject('CursoRepository')
		private readonly cursoRepository: ICursoRepository
	) {}
	async execute(): Promise<ICursoDTO[]> {
		return (await this.cursoRepository.findAll()) as ICursoDTO[];
	}
}
export default ListCursosUsecase;
