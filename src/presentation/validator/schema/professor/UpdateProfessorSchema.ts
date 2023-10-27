import Joi from "joi";

const schemaUpdateProfessor = {
  id: Joi.string().required(),
  nome: Joi.string(),
  email: Joi.string(),
  cpf: Joi.string(),
  telefone: Joi.string(),
  sexo: Joi.string().valid("M", "F"),
  id_departamento: Joi.number().integer(),
  password: Joi.string(),
};

export default schemaUpdateProfessor;
