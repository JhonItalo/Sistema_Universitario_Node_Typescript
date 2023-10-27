import Joi from "joi";

const schemaCreateProfessor = {
  nome: Joi.string().required(),
  email: Joi.string().required(),
  cpf: Joi.string().required(),
  telefone: Joi.string().required(),
  sexo: Joi.string().valid("M", "F").required(),
  id_departamento: Joi.number().integer().required(),
};

export default schemaCreateProfessor;
