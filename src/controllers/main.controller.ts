import { Request, Response } from 'express';
import usuarioModel from '../models/usuario.model';

class MainController {
    public async index(req: Request, res: Response): Promise<void> {
        if (typeof req.session.nome === "undefined") {
            return res.redirect('/');
        }
        const users = await usuarioModel.find()
        res.render('main', { session: req.session.nome, users: users });
    }

    public async registerUser(req: Request, res: Response): Promise<void> {
        try {
            interface user {
                nome: String,
                senha: String,
                cpf: String,
            };

            const insert: user = {
                nome: req.body.nome,
                senha: req.body.senha,
                cpf: req.body.cpf
            };

            await usuarioModel.create(insert);

            res.redirect('/main');

        } catch (err) {
            console.log(err);
        }
    }

    public destroySession(req: Request, res: Response): void {
        req.session.destroy(() => res.redirect('/'));
    }

    public async delete(req: Request, res: Response): Promise<void> {
        try {
            await usuarioModel.deleteOne({ _id: req.params.id });
            res.redirect('/main');
        } catch (err) {
            console.log(err);
        }
    }

    public async updateByID(req: Request, res: Response): Promise<void> {
        try {
            interface user {
                nome: String,
                senha: String,
                cpf: String,
            };
            const update: user = {
                nome: req.body.nomeAT,
                senha: req.body.senhaAT,
                cpf: req.body.cpfAT
            };

            await usuarioModel.updateOne({_id: req.body.hdid}, update);
            res.redirect('/main');

        } catch (err) {
            console.log(err);
        }
    }
}

export default new MainController();