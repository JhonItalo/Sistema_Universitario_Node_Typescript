import "reflect-metadata";
import "./shared/container";
import "./infra/database/redisClient";

import App from "./App";

const server = new App();

server.config();

server.connectDb();

server.doc();

server.routes();

server.start();
