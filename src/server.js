import express from "express";
import { logger } from "./loggers/logger.js";
import {options} from "./config/config.js";
import "./config/daosConfig.js";
import path from "path";
import {fileURLToPath} from 'url';
import { authRouter } from "./router/auth.js";
import cors from "cors";
import { apiRouter } from "./router/index.js";


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())


//routers
app.use('/api/auth', authRouter);
app.use('/api', apiRouter);


const __dirname = path.dirname(fileURLToPath(import.meta.url));

//config de sesion de usuarios

const PORT = options.server.PORT;
const server = app.listen(PORT,()=>logger.info(`Server listening on port ${PORT}`));
server.on('error', error => logger.fatal(`Error in server ${error}`));

export {app};