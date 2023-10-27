import Joi from "joi";

const schemaCreateTurma = {
  nome: Joi.string().required(),
  id_curso: Joi.number().integer(),
};

export default schemaCreateTurma;
