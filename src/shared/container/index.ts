import { container } from 'tsyringe';
import 'reflect-metadata';

import { IProfessorRepository } from '../../modules/professor/domain/repositories/professor.repository.interface';
import { ITurmaRepository } from '../../modules/turma/domain/repositories/turma.repository.interface';
import { ICursoRepository } from '../../modules/curso/domain/repositories/curso.repository.interface';
//import { ICursoDisciplinaRepository } from '../../domain/repositories/ICursoDisciplina';
import { IDisciplinaRepository } from '../../modules/disciplina/domain/repositories/disciplina.repository.interface';

import ProfessorRepository from '../../modules/professor/application/repositories/professor.repository';
import TurmaRepository from '../../modules/turma/application/repositories/turma.repository';

import CursoDisciplinaRepository from '../../application/repositories/CursoDisciplinaRepository';
import ProfessorCursoDisciplinaRepository from '../../application/repositories/ProfessorCursoDisciplinaRepository';
import AlunoProfessorCursoDisciplinaRepository from '../../application/repositories/AlunoProfessorCursoDisciplinaRepository';
//repositories

import EncyptAdpater from '../../infra/adapters/encrypt/encryptAdapter';
import UserFacadeFactory from '../../modules/user/domain/factory/factory.user.facade';
import { IAlunoRepository } from '../../modules/aluno/domain/repositories/aluno.repository.interface';
import AlunoRepository from '../../modules/aluno/application/repositories/aluno.repository';
import IUserRepository from '../../modules/user/domain/repositories/user.repository.interface';
import UserRepository from '../../modules/user/application/repositories/user.repository';
import AlunoUserTransactions, {
	IAlunoUserTransactions,
} from '../../modules/aluno/application/transactions/alunoUser.transactions';
import CursoRepository from '../../modules/curso/application/repositories/curso.repository';
import DisciplinaRepository from '../../modules/disciplina/application/repositories/disciplina.repository';
import ProfessorUserTransactions, {
	IProfessorUserTransactions,
} from '../../modules/professor/application/transactions/professorUser.transactions';
import jwtAuth from '../../infra/adapters/jwt.auth/jwt.adapter';

container.registerSingleton<IAlunoRepository>('AlunoRepository', AlunoRepository);
container.registerSingleton<IProfessorRepository>('ProfessorRepository', ProfessorRepository);
container.registerSingleton<ITurmaRepository>('TurmaRepository', TurmaRepository);
container.registerSingleton<ICursoRepository>('CursoRepository', CursoRepository);
/* container.registerSingleton<ICursoDisciplinaRepository>(
	'CursoDisciplinaRepository',
	CursoDisciplinaRepository
); */
container.registerSingleton<IDisciplinaRepository>('DisciplinaRepository', DisciplinaRepository);
container.registerSingleton(
	'ProfessorCursoDisciplinaRepository',
	ProfessorCursoDisciplinaRepository
);
container.registerSingleton(
	'AlunoProfessorCursoDisciplinaRepository',
	AlunoProfessorCursoDisciplinaRepository
);
container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
//adapter
container.registerSingleton('Encrypt', EncyptAdpater);
container.registerSingleton('JwtAuth', jwtAuth);

//facade
container.registerInstance('UserFacade', UserFacadeFactory.create());
//transactions
container.registerSingleton<IAlunoUserTransactions>('AlunoUserTransactions', AlunoUserTransactions);
container.registerSingleton<IProfessorUserTransactions>(
	'ProfessorUserTransactions',
	ProfessorUserTransactions
);
