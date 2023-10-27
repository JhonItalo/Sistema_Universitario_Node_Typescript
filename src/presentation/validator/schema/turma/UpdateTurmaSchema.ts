import Joi from "joi";

const schemaUpdateTurma = {
  id: Joi.number().integer().required(),
  nome: Joi.string(),
};

export default schemaUpdateTurma;
