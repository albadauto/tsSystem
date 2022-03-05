import { Request, Response } from 'express';

class MainController{
    public index(req: Request, res: Response): void{
        res.render('main', {session: req.session.nome});
    }
}

export default new MainController();