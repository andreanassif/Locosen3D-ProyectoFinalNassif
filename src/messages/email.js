import { config } from "../config/config.js";
import { createTransport } from "nodemailer";

//Admin credentials
export const EMAIL_ADMIN = config.EMAIL_ADMIN;
const PASS_ADMIN = config.PASS_ADMIN;

//config nodemailer
export const transporterEmail = createTransport({
    host:"smtp.gmail.com",
    port:587,
    auth:{
        user: EMAIL_ADMIN,
        pass: PASS_ADMIN
    },
    secure:false,
    tls:{
        rejectUnauthorized:false
    }
});