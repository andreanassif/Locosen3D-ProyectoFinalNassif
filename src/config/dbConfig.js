import mongoose from "mongoose";
import {config} from "./config.js";

export const connectDB = ()=>{
    mongoose.set('strictQuery', false);
    mongoose.connect(config.MONGO_AUTHENTICATION,(error)=>{
        if(error) return console.log(`Hubo un error al conectar la base de datos ${error}`);
        console.log("conexion exitosa!")
    });
}