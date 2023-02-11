import express from "express";
import {UserRouter} from "./api/user.router.js";
import { ProductRouter } from "./api/products.router.js";

const router = express.Router();

router.use("/users",UserRouter);
router.use("/products",ProductRouter);

export {router as apiRouter};