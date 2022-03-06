import { Request, Response } from 'express';
import usuarioModel from '../models/usuario.model';

declare module 'express-session'{
    interface Session{
        nome: string;
    }
}

class IndexController{
    
    public index(req: Request, res: Response){
        res.render('index')
    }

    public async verifyLogin(req: Request, res: Response): Promise<void>{
        try{
            
            const search = await usuarioModel.find({nome: req.body.nome, senha:req.body.senha});
            if(search.length > 0){
                if(req.session){
                    req.session.nome = req.body.nome
                }
                res.redirect('/main');
            }else{
                res.send('Não parabens :/');
            }
        }catch(err){
            console.log(err);
        }
    }

    public insertAdmin(req: Request, res: Response) : void{
        usuarioModel.create({
            nome: 'root',
            senha: 'root',
            cpf: '47575105867'
        }).then(() => console.log("Criado!")).catch((err) => console.log(err));
    }
}

export default new IndexController();