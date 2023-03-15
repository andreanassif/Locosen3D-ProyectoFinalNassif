import express from "express";
import {UserRouter} from "./api/user.routers.js";
import { productsRouter } from "./api/products.router.js";
import { cartsRouter } from "./api/cart.router.js";
import { orderRouter } from "./api/order.router.js";


const router = express.Router();

router.use("/users",UserRouter);
router.use("/products",productsRouter);
router.use("/cart", cartsRouter)
router.use("/orders", orderRouter)

export {router as apiRouter};