import Joi from "joi";

const schemaUpdateAluno = {
  id: Joi.string().required(),
  nome: Joi.string(),
  email: Joi.string(),
  telefone: Joi.string(),
  sexo: Joi.string().valid("M", "F"),
  id_curso: Joi.number().integer(),
  id_turma: Joi.number().integer(),
  password: Joi.string(),
};

export default schemaUpdateAluno;
