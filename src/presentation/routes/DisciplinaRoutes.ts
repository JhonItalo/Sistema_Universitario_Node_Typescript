import { Router } from "express";

import CreateDisciplinaController from "../controllers/disciplina/CreateDisciplinaController";
import DeleteDisciplinaController from "../controllers/disciplina/DeleteDisciplinaController";
import ListDisciplinaController from "../controllers/disciplina/ListDisciplinaController";
import UpdateDisciplinaController from "../controllers/disciplina/UpdateDisciplinaController";
import ValidateRequestBody from "../middlewares/ValidRequestBody";
import schemaCreateDisciplina from "../validator/schema/disciplina/CreateDisciplinaSchema";
import schemaUpdateDisciplina from "../validator/schema/disciplina/UpdateDisciplinaSchema";

import Authentication from "../middlewares/Authentication";
import { departamento } from "../../utils/Constants";
import ExpressAdapter from "../../infra/adapters/express/ExpressAdapter";
const DisciplinaRoutes = Router();

DisciplinaRoutes.post(
  "/",
  Authentication([departamento]),
  ValidateRequestBody(schemaCreateDisciplina),
  ExpressAdapter.adapt(new CreateDisciplinaController())
);
DisciplinaRoutes.patch(
  "/",
  Authentication([departamento]),
  ValidateRequestBody(schemaUpdateDisciplina),
  ExpressAdapter.adapt(new UpdateDisciplinaController())
);
DisciplinaRoutes.delete(
  "/",
  Authentication([departamento]),
  ExpressAdapter.adapt(new DeleteDisciplinaController())
);
DisciplinaRoutes.get(
  "/",
  Authentication([departamento]),
  ExpressAdapter.adapt(new ListDisciplinaController())
);

export default DisciplinaRoutes;
