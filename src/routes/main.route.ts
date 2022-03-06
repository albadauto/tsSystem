import { Router } from "express";
import MainController from "../controllers/main.controller";
const mainRouter = Router();

mainRouter.get('/', MainController.index);

mainRouter.post('/registerUser', MainController.registerUser);

mainRouter.get('/destroySession', MainController.destroySession);

mainRouter.get('/delete/:id', MainController.delete);

export default mainRouter;