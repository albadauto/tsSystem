import { Router } from "express";
import MainController from "../controllers/main.controller";
const mainRouter = Router();

mainRouter.get('/', MainController.index)

export default mainRouter;