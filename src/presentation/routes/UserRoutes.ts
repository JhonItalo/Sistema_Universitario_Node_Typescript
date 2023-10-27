import { Router } from "express";
import AuthUserControler from "../controllers/user/AuthUserControler";
import ExpressAdapter from "../adapters/ExpressAdapter";

const UserRoutes = Router();

UserRoutes.post("/login", ExpressAdapter.adapt(new AuthUserControler()));

export default UserRoutes;
