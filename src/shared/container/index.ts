import { container } from "tsyringe";
import "reflect-metadata";
import { IAlunoRepository } from "../../domain/repositories/IAlunoRepository";
import { IProfessorRepository } from "../../domain/repositories/IProfessorRepository";
import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { ITurmaRepository } from "../../domain/repositories/ITurmaRepository";
import { ICursoRepository } from "../../domain/repositories/ICursoRepository";
import { ICursoDisciplinaRepository } from "../../domain/repositories/ICursoDisciplina";
import { IDisciplinaRepository } from "../../domain/repositories/IDisciplinaRepository";

import AlunoRepository from "../../application/repositories/AlunoRepository";
import ProfessorRepository from "../../application/repositories/ProfessorRepository";
import UserRepository from "../../application/repositories/UserRepository";
import TurmaRepository from "../../application/repositories/TurmaRepository";
import CursoRepository from "../../application/repositories/CursoRepository";
import CursoDisciplinaRepository from "../../application/repositories/CursoDisciplinaRepository";
import DisciplinaRepository from "../../application/repositories/DisciplinaRepository";
import ProfessorCursoDisciplinaRepository from "../../application/repositories/ProfessorCursoDisciplinaRepository";
import AlunoProfessorCursoDisciplinaRepository from "../../application/repositories/AlunoProfessorCursoDisciplinaRepository"; //repositories
container.registerSingleton<IAlunoRepository>("AlunoRepository", AlunoRepository);
container.registerSingleton<IProfessorRepository>("ProfessorRepository", ProfessorRepository);
container.registerSingleton<ITurmaRepository>("TurmaRepository", TurmaRepository);
container.registerSingleton<ICursoRepository>("CursoRepository", CursoRepository);
container.registerSingleton<ICursoDisciplinaRepository>(
  "CursoDisciplinaRepository",
  CursoDisciplinaRepository
);
container.registerSingleton<IDisciplinaRepository>("DisciplinaRepository", DisciplinaRepository);
container.registerSingleton(
  "ProfessorCursoDisciplinaRepository",
  ProfessorCursoDisciplinaRepository
);
container.registerSingleton(
  "AlunoProfessorCursoDisciplinaRepository",
  AlunoProfessorCursoDisciplinaRepository
);
container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
