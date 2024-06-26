import { Router } from 'express';

import CreateProfessorController from '../controllers/professor/CreateProfessor.controller';
import DeleteProfessorController from '../controllers/professor/DeleteProfessor.controller';
import ListProfessorController from '../controllers/professor/ListProfessor.controller';
import UpdateProfessorController from '../controllers/professor/UpdateProfessorController';
import AddListProfessorCursoDisciplinaController from '../controllers/professor/AddListProfessorCursoDisciplinaController';
import FindProfessorCursoDisciplinaByProfessorIdController from '../controllers/professor/FindProfessorCursoDisciplinaByIdProfessorController';
import ValidateRequestBody from '../middlewares/ValidRequestBody.middle';
import schemaCreateProfessor from '../validator/schema/professor/CreateProfessorSchema';
import schemaUpdateProfessor from '../validator/schema/professor/UpdateProfessorSchema';
import schemaAddDisciplina from '../validator/schema/professor/AddDisciplinaSchema';

import Authentication from '../middlewares/Authentication.middle';

import { departamento, professor } from '../../utils/constants';
import Authorization from '../middlewares/Authorization.middle';
import ExpressAdapter from '../../infra/adapters/express/ExpressAdapter';
import FindProfessorByCpfController from '../controllers/professor/FindProfessorByCpfController';
import FindProfessorByEmailController from '../controllers/professor/FinProfessorByEmailController';
const ProfessorRoutes = Router();

ProfessorRoutes.post(
	'/',
	// Authentication([departamento]),
	//ValidateRequestBody(schemaCreateProfessor),
	ExpressAdapter.adapt(new CreateProfessorController())
);

ProfessorRoutes.patch(
	'/',
	//Authentication([departamento]),
	//ValidateRequestBody(schemaUpdateProfessor),
	ExpressAdapter.adapt(new UpdateProfessorController())
);

ProfessorRoutes.delete(
	'/',
	//Authentication([departamento]),
	ExpressAdapter.adapt(new DeleteProfessorController())
);

ProfessorRoutes.get(
	'/',
	// Authentication([departamento]),
	ExpressAdapter.adapt(new ListProfessorController())
);

ProfessorRoutes.get(
	'/cpf/:cpf',
	//Authentication([departamento]),
	ExpressAdapter.adapt(new FindProfessorByCpfController())
);

ProfessorRoutes.get(
	'/email/:email',
	//Authentication([departamento]),
	ExpressAdapter.adapt(new FindProfessorByEmailController())
);

/* 

ProfessorRoutes.get(
	'/:id/grade',
	// Authentication([departamento, professor]),
  //Authorization(), 
	ExpressAdapter.adapt(new FindProfessorCursoDisciplinaByProfessorIdController())
);
ProfessorRoutes.post(
	'/disciplina',
	//Authentication([departamento]),
  //ValidateRequestBody(schemaAddDisciplina), 
	ExpressAdapter.adapt(new AddListProfessorCursoDisciplinaController())
);
 */
export default ProfessorRoutes;
