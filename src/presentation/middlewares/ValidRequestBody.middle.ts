import { Request, Response, NextFunction } from "express";
import Joi from "joi";

interface GenericSchema {
  [key: string]: Joi.Schema;
}

const ValidateRequestBody = (schema: GenericSchema) => {
  return (request: Request, response: Response, next: NextFunction) => {
    const { error } = Joi.object(schema).validate(request.body);

    if (error) {
      const resolve = {
        response: null,
        error: error.details[0].message,
      };
      return response.status(400).json(resolve);
    }

    next();
  };
};

export default ValidateRequestBody;
