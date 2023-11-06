import { Router } from "express";

import CreateCursoController from "../controllers/curso/CreateCursoController";
import DeleteCursoController from "../controllers/curso/DeleteCursoController";
import UpdateCursoController from "../controllers/curso/UpdateCursoController";
import ListCursoController from "../controllers/curso/ListCursoController";
import AddListCursoDisciplinaController from "../controllers/curso/AddListCursoDisciplinaController";
import FindCursoDisciplinaByCursoIdController from "../controllers/curso/FindCursoDisciplinaByCursoIdController";
import FindGradeByCursoIdController from "../controllers/curso/FindGradeByCursoIdController";
import ValidateRequestBody from "../middlewares/ValidRequestBody";
import schemaCreateCurso from "../validator/schema/curso/CreateCursoSchema";
import schemaUpdateCurso from "../validator/schema/curso/UpdateCursoSchema";
import schemaAddDisciplina from "../validator/schema/curso/AddDisciplinaSchema";
import Authentication from "../middlewares/Authentication";

import { departamento, aluno } from "../../utils/Constants";
import ExpressAdapter from "../../infra/adapters/express/ExpressAdapter";
const CursoRoutes = Router();

CursoRoutes.post(
  "/",
  Authentication([departamento]),
  ValidateRequestBody(schemaCreateCurso),
  ExpressAdapter.adapt(new CreateCursoController())
);
CursoRoutes.patch(
  "/",
  Authentication([departamento]),
  ValidateRequestBody(schemaUpdateCurso),
  ExpressAdapter.adapt(new UpdateCursoController())
);
CursoRoutes.delete(
  "/",
  Authentication([departamento]),
  ExpressAdapter.adapt(new DeleteCursoController())
);

CursoRoutes.get(
  "/",
  Authentication([departamento]),
  ExpressAdapter.adapt(new ListCursoController())
);

CursoRoutes.post(
  "/disciplina",
  Authentication([departamento]),
  ValidateRequestBody(schemaAddDisciplina),
  ExpressAdapter.adapt(new AddListCursoDisciplinaController())
);

CursoRoutes.get(
  "/:id/disciplina/",
  Authentication([departamento]),
  ExpressAdapter.adapt(new FindCursoDisciplinaByCursoIdController())
);

CursoRoutes.get(
  "/grade/:id",
  Authentication([departamento, aluno]),
  ExpressAdapter.adapt(new FindGradeByCursoIdController())
);

export default CursoRoutes;
