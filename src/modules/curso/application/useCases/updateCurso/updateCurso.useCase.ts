import { inject, injectable } from 'tsyringe';
import { ICursoRepository } from '../../../domain/repositories/curso.repository.interface';
import { ICursoDTO, IUpdateCursoDTO } from '../../dtos/curso.dto';
import DataNotFoundError from '../../../../../presentation/erros/DataNotFoundError';
import { CursoAlreadyExists, CursoNotFound } from '../../../../../presentation/erros/Constants';
import DataConflictError from '../../../../../presentation/erros/DataConflictError';

@injectable()
class UpdateCursoUseCase {
	constructor(
		@inject('CursoRepository')
		private readonly cursoRepository: ICursoRepository
	) {}

	async execute({ id, nome, id_departamento }: IUpdateCursoDTO): Promise<ICursoDTO> {
		if (!nome && !id_departamento) {
			throw new Error('Requisição inválida');
		}
		const curso = await this.cursoRepository.findBy({ id });

		if (!curso) {
			throw new DataNotFoundError(CursoNotFound);
		}

		const cursoExists = await this.cursoRepository.findBy({
			nome: nome ? nome : curso.nome,
			id_departamento: id_departamento ? id_departamento : curso.id_departamento,
		});
		if (cursoExists) {
			throw new DataConflictError(CursoAlreadyExists);
		}

		return (await this.cursoRepository.update({ id, nome, id_departamento })) as ICursoDTO;
	}
}
export default UpdateCursoUseCase;
