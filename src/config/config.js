import * as dotenv from "dotenv";
import parsedArgs from "minimist";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

//llamamos libreria minimist y definimos las variables por default

const objArguments = parsedArgs(process.argv.slice(2), {
  alias: {
    m: "modo",
    p: "puerto",
    e: "env",
  },
  default: {
    puerto: 8080,
    modo: "FORK",
    env: "DEV",
  },
});

//creamos la config de nuestra app

export const options = {
  server: {
    MODO: objArguments.modo,
    PORT: objArguments.puerto,
    NODE_ENV: objArguments.env,
    databaseType: process.env.DATABASE_TYPE || "MONGO",
  },

  mongoDB: {
    MONGO_AUTHENTICATION: process.env.MONGO_AUTHENTICATION,
    MONGO_SESSION: process.env.MONGO_SESSION,
    MONGO_URL: process.env.MONGO_URL,
  },

  sqlite: {
    client: "sqlite3",
    connection: {
      filename: path.join(__dirname, "../DB/ecommerce.sqlite"),
    },
    useNullAsDefault: true,
  },

  EMAIL_ADMIN: process.env.EMAIL_ADMIN,
  PASS_ADMIN: process.env.PASS_ADMIN,
  TWILIO_ID: process.env.TWILIO_ID,
  TWILIO_TOKEN: process.env.TWILIO_TOKEN,
  TWILIO_PHONE: process.env.TWILIO_PHONE,
  TWILIO_WAP: process.env.TWILIO_WAP,
  ADMIN_WAP: process.env.ADMIN_WAP,

  fileSystem: {
    pathProducts: "products.json",
    pathCarts: "carts.json",
    pathUsers: "users.json",
  },
};
