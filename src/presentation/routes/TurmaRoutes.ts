import { Router } from 'express';

import CreateTurmaController from '../controllers/turma/CreateTurmaController';
import DeleteTurmaController from '../controllers/turma/DeleteTurmaController';
import ListTurmaController from '../controllers/turma/ListTurmaController';
import UpdateTurmaController from '../controllers/turma/UpdateTurmaController';
import ValidateRequestBody from '../middlewares/ValidRequestBody.middle';
import schemaCreateTurma from '../validator/schema/turma/CreateTurmaSchema';
import schemaUpdateTurma from '../validator/schema/turma/UpdateTurmaSchema';

import Authentication from '../middlewares/Authentication.middle';

import { departamento } from '../../utils/constants';
import ExpressAdapter from '../../infra/adapters/express/ExpressAdapter';

const TurmaRoutes = Router();

TurmaRoutes.post(
	'/',
	// Authentication([departamento]),
	//ValidateRequestBody(schemaCreateTurma),
	ExpressAdapter.adapt(new CreateTurmaController())
);

TurmaRoutes.patch(
	'/',
	//Authentication([departamento]),
	//ValidateRequestBody(schemaUpdateTurma),
	ExpressAdapter.adapt(new UpdateTurmaController())
);

TurmaRoutes.delete(
	'/',
	//Authentication([departamento]),
	ExpressAdapter.adapt(new DeleteTurmaController())
);
TurmaRoutes.get(
	'/',
	//Authentication([departamento]),
	ExpressAdapter.adapt(new ListTurmaController())
);

export default TurmaRoutes;
