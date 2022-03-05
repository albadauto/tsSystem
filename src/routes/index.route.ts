import { Router } from 'express';
import IndexController from '../controllers/index.controller';
const indexRouter = Router();

indexRouter.get('/', IndexController.index);


indexRouter.post('/verifyLogin', IndexController.verifyLogin);

indexRouter.get('/insertAdmin', IndexController.insertAdmin);

export default indexRouter;