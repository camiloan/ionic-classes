import Server from "./classes/server";
import mongoose from "mongoose";

import cors from 'cors';

import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';

import userRoutes from "./routes/usuario";
import postRoutes from "./routes/post";

const server = new Server();
const uri = "mongodb+srv://SpartanIV:SPARTAN205_caba117@fotosgram-server-db-qtxjy.mongodb.net/test?retryWrites=true&w=majority";

//Body parser
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());

// File Upload
server.app.use(fileUpload());

// Configurar CORS
server.app.use(cors({ origin: true, credentials: true }));

// Rutas de mi aplicación
server.app.use('/user', userRoutes);
server.app.use('/posts', postRoutes);

// Conectar DB
mongoose.connect(uri,
    { useNewUrlParser: true, useCreateIndex: true }, (err) => {
        if (err) throw err;
        console.log('Base de datos ONLINE');
    });

//Levantar express
server.start(() => {
    console.log(`Servidor corriendo en puerto ${server.port}`);
});