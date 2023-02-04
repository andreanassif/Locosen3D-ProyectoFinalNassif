import * as dotenv from "dotenv";
import parsedArgs from "minimist";

dotenv.config();

//llamamos libreria minimist y definimos las variables por default
const options = {alias: {m: "modo", p: "puerto"}, default:{puerto:8080, modo: "FORK"}}

const objArguments = parsedArgs(process.argv.slice(2), options)
console.log("objArguments",objArguments)

//creamos la config de nuestra app

export const config = {
    MODO: objArguments.modo,
    PORT: objArguments.puerto,
    MONGO_AUTHENTICATION: process.env.MONGO_AUTHENTICATION,
    MONGO_SESSION: process.env.MONGO_SESSION
};