import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";
import passport from "passport";
import { logger } from "./loggers/logger.js";
import {options} from "./config/config.js";
import path from "path";
import {fileURLToPath} from 'url';
import { authRouter } from "./router/auth.js";
import cors from "cors";
import { apiRouter } from "./router/index.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(cors({
    origin:"http://localhost:3000",
    methods:['PUT', 'POST']
}))

//config sesion usuarios
app.use(session({
    //donde se guardan las sesiones
    store: MongoStore.create({
        mongoUrl: options.mongoDB.MONGO_SESSION
    }),
    secret:"claveSecreta",
    resave:false,
    saveUninitialized:false
}));

//config passport
app.use(passport.initialize());
app.use(passport.session());


//routers
app.use('/api/auth', authRouter);
app.use('/api', apiRouter);
//app.use('/api/cart', apiRouter);
//app.use('/api/users', apiRouter);


const __dirname = path.dirname(fileURLToPath(import.meta.url));

//config de sesion de usuarios

const PORT = options.server.PORT;
const server = app.listen(PORT,()=>logger.info(`Server listening on port ${PORT}`));
server.on('error', error => logger.fatal(`Error in server ${error}`));

export {app};