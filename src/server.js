import express from "express";
import { connectDB } from "./config/dbConfig.js";
import {config} from "./config/config.js";
import {apiRouter} from "./router/index.js";
import path from "path";
import {fileURLToPath} from 'url';

connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
app.use(apiRouter);

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = config.PORT;
app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));