import express from "express";
import * as CartController from "../../controllers/cart.controller.js";
import { getToken } from "../../middlewares/token.js";
import { AdminRole } from "../../middlewares/checkRoles.js";

//http://localhost:8080/api/cart
const cartsRouter = express.Router();

cartsRouter.post(
  "/:cartID",
  getToken,
  CartController.addProdInCartByIdController
);

cartsRouter.delete(
  "/:cartID",
  getToken,
  CartController.deleteProdCartController
);

cartsRouter.get("/", getToken, CartController.getCartController);

//esta ruta genera la orden
cartsRouter.post("/:cartID/checkout", getToken, CartController.checkOut);

cartsRouter.get("/", getToken, AdminRole, CartController.getAllCartsController);

export { cartsRouter };