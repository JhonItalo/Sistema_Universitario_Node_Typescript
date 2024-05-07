import { Router } from 'express';

import CreateAlunoController from '../controllers/aluno/CreateAluno.controller';
import UpdateAlunoController from '../controllers/aluno/UpdateAluno.controller';
import DeleteAlunoController from '../controllers/aluno/DeleteAluno.controller';
import ListAlunoController from '../controllers/aluno/ListAluno.controller';
import FindAlunoByCpfController from '../controllers/aluno/FindAlunoByCpf.controller';
import FindAlunoByEmailController from '../controllers/aluno/FindAlunoByEmail.controller';
import ChangeDisciplinaController from '../controllers/aluno/ChangeDisciplinaController';
import FindGradeController from '../controllers/aluno/FindGradeController';
import ValidateRequestBody from '../middlewares/ValidRequestBody.middle';
import schemaCreateAluno from '../validator/schema/aluno/CreateAlunoSchema';
import schemaUpdateAluno from '../validator/schema/aluno/UpdateAlunoSchema';
import schemaChangeDisciplina from '../validator/schema/aluno/ChangeDisciplinaSchema';
import Authentication from '../middlewares/Authentication.middle';
import Authorization from '../middlewares/Authorization.middle';

import { departamento, aluno } from '../../utils/constants';
import ExpressAdapter from '../../infra/adapters/express/ExpressAdapter';

const AlunoRoutes = Router();

AlunoRoutes.post(
	'/',
	//Authentication([departamento]),
	// ValidateRequestBody(schemaCreateAluno),
	ExpressAdapter.adapt(new CreateAlunoController())
);

AlunoRoutes.delete(
	'/',
	//Authentication([departamento]),
	ExpressAdapter.adapt(new DeleteAlunoController())
);

AlunoRoutes.get(
	'/',
	//Authentication([departamento]),
	ExpressAdapter.adapt(new ListAlunoController())
);

AlunoRoutes.get(
	'/cpf/:cpf',
	//Authentication([departamento]),
	ExpressAdapter.adapt(new FindAlunoByCpfController())
);

AlunoRoutes.get(
	'/email/:email',
	// Authentication([departamento]),
	ExpressAdapter.adapt(new FindAlunoByEmailController())
);

AlunoRoutes.patch(
	'/',
	//Authentication([departamento]),
	//ValidateRequestBody(schemaUpdateAluno),
	ExpressAdapter.adapt(new UpdateAlunoController())
);

/* 



//basics


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
); */

export default AlunoRoutes;
