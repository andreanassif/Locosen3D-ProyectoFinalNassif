import mongoose from "mongoose";
import {options} from "./config.js";

export const connectDB = ()=>{
    mongoose.set('strictQuery', false);
    mongoose.connect(options.mongoDB.mongoUrl,(error)=>{
        if(error) return console.log(`Hubo un error al conectar la base de datos ${error}`);
        console.log("conexion exitosa!")
    });
}