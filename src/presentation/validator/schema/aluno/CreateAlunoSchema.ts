import Joi from "joi";

const schemaCreateAluno = {
  nome: Joi.string().required(),
  email: Joi.string().required(),
  cpf: Joi.string().required(),
  telefone: Joi.string().required(),
  sexo: Joi.string().valid("M", "F").required(),
  id_curso: Joi.number().integer().required(),
  id_turma: Joi.number().integer().required(),
};

export default schemaCreateAluno;
