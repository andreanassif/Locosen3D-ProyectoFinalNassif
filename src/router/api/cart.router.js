import express from "express";
import * as CartController from "../../controllers/cart.controller.js";
import { getToken } from "../../middlewares/token.js";



//http://localhost:8080/api/cart
const cartsRouter = express.Router();

cartsRouter.post("/:id", getToken, CartController.addProdByIdController);

//cartsRouter.post("/:id", getToken, CartController.saveCartControllers);

cartsRouter.get("/:id", getToken, CartController.getCartController);

cartsRouter.delete("/:id", getToken, CartController.cleanCartControllers);

cartsRouter.post("/checkout", getToken, CartController.checkOut);

export { cartsRouter };
