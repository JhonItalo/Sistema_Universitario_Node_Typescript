import { Router } from "express";

import CreateAlunoController from "../controllers/aluno/CreateAlunoController";
import UpdateAlunoController from "../controllers/aluno/UpdateAlunoController";
import DeleteAlunoController from "../controllers/aluno/DeleteAlunoController";
import ListAlunoController from "../controllers/aluno/ListAlunoController";
import FindAlunoByCpfController from "../controllers/aluno/FindAlunoByCpfController";
import FindAlunoByEmailController from "../controllers/aluno/FindAlunoByEmailController";
import ChangeDisciplinaController from "../controllers/aluno/ChangeDisciplinaController";
import FindGradeController from "../controllers/aluno/FindGradeController";
import ValidateRequestBody from "../middlewares/ValidRequestBody";
import schemaCreateAluno from "../validator/schema/aluno/CreateAlunoSchema";
import schemaUpdateAluno from "../validator/schema/aluno/UpdateAlunoSchema";
import schemaChangeDisciplina from "../validator/schema/aluno/ChangeDisciplinaSchema";
import Authentication from "../middlewares/Authentication";
import Authorization from "../middlewares/Authorization";

import { departamento, aluno } from "../../utils/Constants";
import ExpressAdapter from "../adapters/ExpressAdapter";

const AlunoRoutes = Router();

AlunoRoutes.post(
  "/",
  Authentication([departamento]),
  ValidateRequestBody(schemaCreateAluno),
  ExpressAdapter.adapt(new CreateAlunoController())
);
AlunoRoutes.patch(
  "/",
  Authentication([departamento]),
  ValidateRequestBody(schemaUpdateAluno),
  ExpressAdapter.adapt(new UpdateAlunoController())
);
AlunoRoutes.delete(
  "/",
  Authentication([departamento]),
  ExpressAdapter.adapt(new DeleteAlunoController())
);

AlunoRoutes.get(
  "/",
  Authentication([departamento]),
  ExpressAdapter.adapt(new ListAlunoController())
);
//basics
AlunoRoutes.get(
  "/cpf/:cpf",
  Authentication([departamento]),
  ExpressAdapter.adapt(new FindAlunoByCpfController())
);
AlunoRoutes.get(
  "/email/:email",
  Authentication([departamento]),
  ExpressAdapter.adapt(new FindAlunoByEmailController())
);
AlunoRoutes.post(
  "/disciplina",
  Authentication([departamento, aluno]),
  Authorization(),
  ValidateRequestBody(schemaChangeDisciplina),
  ExpressAdapter.adapt(new ChangeDisciplinaController())
);
AlunoRoutes.get(
  "/grade/:id",
  Authentication([departamento, aluno]),
  Authorization(),
  ExpressAdapter.adapt(new FindGradeController())
);

export default AlunoRoutes;
