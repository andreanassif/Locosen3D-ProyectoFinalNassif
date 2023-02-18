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
    MONGO_SESSION: process.env.MONGO_SESSION,
    EMAIL_ADMIN: process.env.EMAIL_ADMIN,
    PASS_ADMIN: process.env.PASS_ADMIN,
    TWILIO_ID: process.env.TWILIO_ID,
    TWILIO_TOKEN: process.env.TWILIO_TOKEN,
    TWILIO_PHONE: process.env.TWILIO_PHONE,
    TWILIO_WAP: process.env.TWILIO_WAP,
    ADMIN_WAP: process.env.ADMIN_WAP
};