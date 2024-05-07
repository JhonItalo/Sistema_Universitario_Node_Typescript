import ValidationError from '../../../../presentation/erros/ValidationError';
import { ICreateAlunoDTO } from '../../application/dtos/aluno.dto';
import AlunoEntity from '../entities/aluno.entity';
import Joi from 'joi';
const createAlunoSchema = Joi.object({
	nome: Joi.string().required(),
	email: Joi.string().email().required(),
	cpf: Joi.string()
		.pattern(new RegExp(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/))
		.required(),
	telefone: Joi.string().required(),
	sexo: Joi.string().valid('M', 'F').required(),
	id_curso: Joi.number().integer().required(),
	id_turma: Joi.number().integer().required(),
});
export default class AlunoEntityFactory {
	static create(input: ICreateAlunoDTO) {
		const { error } = createAlunoSchema.validate(input, { abortEarly: false });
		if (error) {
			throw new ValidationError(`${errorMessage(error.details)}`);
		}
		return new AlunoEntity(input);
	}
}
const errorMessage = (error) => {
	let message = '';
	error.forEach((element) => {
		message = message + element.message + ',';
	});
	return message;
};
