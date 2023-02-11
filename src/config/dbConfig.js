import mongoose from "mongoose";
import {config} from "./config.js";
import {logger} from "../loggers/logger.js"

export const connectDB = ()=>{
    mongoose.set('strictQuery', false);
    mongoose.connect(config.MONGO_AUTHENTICATION,(error)=>{
        if(error) return logger.fatal(`Hubo un error al conectar la base de datos ${error}`);
        logger.info("conexion exitosa!")
    });
}