import express from "express";

import { corsOptions } from "./shared/config/cors";
import cors from "cors";
import ratelimiter from "./presentation/middlewares/RateLimit";

import swaggerUi from "swagger-ui-express";
import swaggerFile from "./documentation/swagger.json";

import UserRoutes from "./presentation/routes/UserRoutes";
import AlunoRoutes from "./presentation/routes/AlunoRoutes";
import CursoRoutes from "./presentation/routes/CursoRoutes";
import DisciplinaRoutes from "./presentation/routes/DisciplinaRoutes";
import TurmaRoutes from "./presentation/routes/TurmaRoutes";
import ProfessorRoutes from "./presentation/routes/ProfessorRoutes";

import { RedisClient } from "./infra/database/redisClient";
import { prisma } from "./infra/database/prismaClient";

class App {
  app: express.Application;

  constructor() {
    this.app = express();
  }
  config() {
    this.app.use(express.json());
    this.app.use(ratelimiter);
    this.app.use(cors(corsOptions));
  }
  doc() {
    this.app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
  }
  routes() {
    this.app.use("/user", UserRoutes);
    this.app.use("/aluno", AlunoRoutes);
    this.app.use("/curso", CursoRoutes);
    this.app.use("/disciplina", DisciplinaRoutes);
    this.app.use("/turma", TurmaRoutes);
    this.app.use("/professor", ProfessorRoutes);
  }
  async connectDb() {
    await RedisClient.connect();
  }
  async disconect() {
    await prisma.$disconnect();
  }
  async start() {
    this.app.listen(3000, () => {
      console.log(`Servidor iniciado na porta 3000.`);
    });
  }
}

export default App;
