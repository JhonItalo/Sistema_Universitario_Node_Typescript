import Joi from "joi";

const schemaCreateCurso = {
  nome: Joi.string().required(),
  id_departamento: Joi.number().integer().required(),
};

export default schemaCreateCurso;
