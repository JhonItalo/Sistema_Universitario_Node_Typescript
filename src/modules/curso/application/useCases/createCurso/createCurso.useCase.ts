import { inject, injectable } from 'tsyringe';
import { ICursoRepository } from '../../../domain/repositories/curso.repository.interface';
import { ICreateCursoDTO, ICursoDTO } from '../../dtos/curso.dto';
import DataConflictError from '../../../../../presentation/erros/DataConflictError';
import { CursoAlreadyExists } from '../../../../../presentation/erros/Constants';

@injectable()
class CreateCursoUsecase {
	constructor(
		@inject('CursoRepository')
		private readonly cursorepository: ICursoRepository
	) {}

	async execute({ nome, id_departamento }: ICreateCursoDTO): Promise<ICursoDTO> {
		const cursoExist = await this.cursorepository.findBy({
			nome,
			id_departamento,
		});
		if (cursoExist) {
			throw new DataConflictError(CursoAlreadyExists);
		}
		return (await this.cursorepository.create({ nome, id_departamento })) as ICursoDTO;
	}
}
export default CreateCursoUsecase;
