import Joi from "joi";

const schemaChangeDisciplina = {
  id: Joi.string().required(),
  disciplina: Joi.array().items(Joi.number()).required(),
};

export default schemaChangeDisciplina;
