import { Router } from "express";
import AuthUserControler from "../controllers/user/AuthUserControler";
import ExpressAdapter from "../../infra/adapters/express/ExpressAdapter";

const UserRoutes = Router();

UserRoutes.post("/login", ExpressAdapter.adapt(new AuthUserControler()));

export default UserRoutes;
