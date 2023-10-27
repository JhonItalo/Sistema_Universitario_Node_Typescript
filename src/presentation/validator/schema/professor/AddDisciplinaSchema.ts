import Joi from "joi";

const schemaAddDisciplina = {
  id: Joi.string().required(),
  cursoDisciplina: Joi.array().items(Joi.number()).required(),
};

export default schemaAddDisciplina;
