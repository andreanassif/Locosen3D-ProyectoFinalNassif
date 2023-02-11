import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";
import passport from "passport";

import { logger } from "./loggers/logger.js";
import { connectDB } from "./config/dbConfig.js";
import {config} from "./config/config.js";
import { cartsRouter } from "./router/api/cart.router.js";
import { productsRouter } from "./router/api/products.router.js";
import path from "path";
import {fileURLToPath} from 'url';
import { authRouter } from "./router/auth.js";


connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

//config sesion usuarios
app.use(session({
    //donde se guardan las sesiones
    store: MongoStore.create({
        mongoUrl: config.MONGO_SESSION
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
app.use('/api/products', productsRouter);
app.use('/api/cart', cartsRouter);

const __dirname = path.dirname(fileURLToPath(import.meta.url));

//config de sesion de usuarios

const PORT = config.PORT;
const server = app.listen(PORT,()=>logger.info(`Server listening on port ${PORT}`));
server.on('error', error => logger.fatal(`Error in server ${error}`));