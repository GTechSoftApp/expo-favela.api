import { Router } from "express";
import usersRoutes from "./users/users";


const routes = Router();
routes.use("/", usersRoutes);
export default routes;
