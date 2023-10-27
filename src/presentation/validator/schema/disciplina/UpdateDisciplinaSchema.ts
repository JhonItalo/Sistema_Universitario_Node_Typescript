import Joi from "joi";

const schemaUpdateDisciplina = {
  id: Joi.number().integer().required(),
  nome: Joi.string(),
  carga_horaria: Joi.number(),
};

export default schemaUpdateDisciplina;
