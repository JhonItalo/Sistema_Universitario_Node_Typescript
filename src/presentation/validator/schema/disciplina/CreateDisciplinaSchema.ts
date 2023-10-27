import Joi from "joi";

const schemaCreateDisciplina = {
  nome: Joi.string().required(),
  carga_horaria: Joi.number().required(),
};

export default schemaCreateDisciplina;
