"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var usuario_model_1 = require("../models/usuario.model");
var bcrypt_1 = __importDefault(require("bcrypt"));
var userRoutes = express_1.Router();
// Login
userRoutes.post('/login', function (req, res) {
    var body = req.body;
    usuario_model_1.Usuario.findOne({ email: body.email }, function (err, userDB) {
        if (err)
            throw err;
        if (!userDB) {
            return res.json({
                ok: false,
                mensaje: 'Usuario/Contraseña no son correctos'
            });
        }
        if (userDB.compararPassword(body.password)) {
            res.json({
                ok: true,
                token: 'FSAFSDGFDFASFSDFDADASDASDASDASD'
            });
        }
        else {
            return res.json({
                ok: false,
                mensaje: 'Usuario/Contraseña no son correctos ***'
            });
        }
    });
});
// Crear un Usuario en la Base de Datos
userRoutes.post('/create', function (req, res) {
    var user = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        avatar: req.body.avatar,
        email: req.body.email,
        password: bcrypt_1.default.hashSync(req.body.password, 10),
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
    usuario_model_1.Usuario.create(user).then(function (userDB) {
        res.json({
            ok: true,
            user: userDB
        });
    }).catch(function (err) {
        res.json({
            ok: false,
            err: err
        });
    });
});
exports.default = userRoutes;
