import {Schema,model,Document} from 'mongoose';
import bcrypt from 'bcrypt';

const usuarioSchema=new Schema({
    nombre:{
        type: String,
        required: [true,'El nombre es necesario']
    }, 
    apellido:{
        type: String,
        required: [true,'El apellido es necesario']
    }, 
    avatar:{
        type: String,
        default: 'av-1.png'
    },
    email:{
        type: String,
        unique: true,
        required: [true,'El correo es necesario']
    },
    password:{
        type: String,
        required: [true,'La contraseña es necesaria']
    },
    birthday:{
        type: String,
        required:[true,'La fecha de nacimiento es necesaria']
    },
    gender:{
        type: String,
        required:[true,'El genero es necesario']
    }
});

usuarioSchema.method('compararPassword',function(password:string=''):boolean{
    if(bcrypt.compareSync(password,this.password)){
        return true;
    }else{
        return false;
    }
});

interface IUsuario extends Document{
    nombre:string;
    apellido:string;
    avatar:string;
    email:string;
    password:string;
    birthday:string;
    gender:string;
    compararPassword(password:string):boolean;
}

export const Usuario = model<IUsuario>('Usuario', usuarioSchema);