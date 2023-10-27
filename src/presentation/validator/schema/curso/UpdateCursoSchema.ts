import Joi from "joi";

const schemaUpdateCurso = {
  id: Joi.number().integer().required(),
  nome: Joi.string(),
  id_departamento: Joi.number(),
};

export default schemaUpdateCurso;
