import express from "express";
import handlebars from "express-handlebars";
import { connectDB } from "./config/dbConfig.js";
import {options} from "./config/config.js";
import { __dirname } from "./util.js";
import {apiRouter} from "./routes/index.js";
import { config } from "dotenv";

connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
app.use(apiRouter);

const PORT = config.PORT;
app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));