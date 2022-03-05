import express from 'express';
import mongoose from 'mongoose';
import indexRouter from './routes/index.route';
import path from 'path';
import session from 'express-session';
import mainRouter from './routes/main.route';

export class App{
    private express: express.Application;
    private PORT = 8080;

    constructor(){
        this.express = express();
        this.listen();
        this.database();
        this.middlewares();
        this.routes();
    }

    public getApp(): express.Application{
        return this.express;
    }

    private async database(): Promise<void>{
        try{
            await mongoose.connect('mongodb://localhost/sisteminha');
            console.log("Conectado ao banco de dados!");
        }catch(err){
            console.log(err)
        }
    }

    private middlewares(): void {
        this.express.set('view engine', 'ejs');
        this.express.use(express.urlencoded({extended: true}));
        this.express.use(express.json());
        this.express.use(express.static(path.join(__dirname, '../public')));
        this.express.use(session({
            resave:true,
            saveUninitialized:true,
            secret:'KKKKKKKKKKKKKKKKKK'
        }));
    }

    private routes(): void{
        this.express.use('/', indexRouter)
        this.express.use('/main', mainRouter)
    }

    private listen(): void{
        this.express.listen(this.PORT, () => console.log(`Conectado na porta ${this.PORT}`));
    }
}