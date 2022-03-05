import { Schema, model } from 'mongoose';

const usuarioSchema = new Schema({
    nome:{
        type:String
    },
    senha:{
        type:String
    },
    cpf:{
        type:String
    },
})


export default model('usuario', usuarioSchema);