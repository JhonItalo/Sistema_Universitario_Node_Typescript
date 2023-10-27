import Joi from "joi";

const schemaAddDisciplina = {
  id: Joi.number().integer(),
  disciplina: Joi.array().items(Joi.number()).required(),
};

export default schemaAddDisciplina;
