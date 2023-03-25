import { options } from "../config/config.js";
import { createTransport } from "nodemailer";

//Admin credentials
export const EMAIL_ADMIN = options.EMAIL_ADMIN;
const PASS_ADMIN = options.PASS_ADMIN;

//config nodemailer
export const transporterEmail = createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: EMAIL_ADMIN,
    pass: PASS_ADMIN,
  },
  secure: false,
  tls: {
    rejectUnauthorized: false,
  },
});

const orderEmail = `<div>
<h1>Nueva Orden Generada</h1>
<p>La orden fue generada correctamente!</p>
</div>`

export const mailOptions = {
  from:"Servidor de Locos en 3D",
  to: EMAIL_ADMIN,
  subject: "Una nueva orden se ha registrado",
  html: orderEmail
}


