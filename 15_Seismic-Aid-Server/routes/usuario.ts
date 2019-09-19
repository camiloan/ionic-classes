import { Router, Request, Response } from 'express';
import { Usuario } from '../models/usuario.model';
import bcrypt from 'bcrypt';
const userRoutes = Router();

// Login
userRoutes.post('/login', (req: Request, res: Response)=>{
    const body = req.body;
    Usuario.findOne({email: body.email}, (err, userDB)=>{
        if(err) throw err;
        if(!userDB){
            return res.json({
                ok:false,
                mensaje: 'Usuario/Contraseña no son correctos'
            });
        }
        if(userDB.compararPassword(body.password)){
            res.json({
                ok:true,
                token: 'FSAFSDGFDFASFSDFDADASDASDASDASD'
            });
        }else{
            return res.json({
                ok:false,
                mensaje: 'Usuario/Contraseña no son correctos ***'
            });
        }
    })
});

// Crear un Usuario en la Base de Datos
userRoutes.post('/create', (req: Request, res: Response) => {

    const user = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        avatar: req.body.avatar,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password,10),
        birthday: req.body.birthday,
        gender: req.body.gender
    };

    // nombre:string;
    // apellido:string;
    // avatar:string;
    // email:string;
    // password:string;
    // birthday:string;
    // gender:string;

    Usuario.create(user).then(userDB => {
        res.json({
            ok: true,
            user: userDB
        });
    }).catch(err => {
        res.json({
            ok: false,
            err
        });
    });

});

export default userRoutes;