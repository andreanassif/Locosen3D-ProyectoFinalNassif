import express from "express";
import * as CartController from "../../controllers/cart.controller.js";
import { getToken } from "../../middlewares/token.js";
import { AdminRole } from "../../middlewares/checkRoles.js";



//http://localhost:8080/api/cart
const cartsRouter = express.Router();

cartsRouter.post("/:id", getToken, CartController.addProdByIdController);

cartsRouter.delete("/:id", getToken, CartController.cleanCartControllers);

cartsRouter.get("/:id", getToken, CartController.getCartController);

//esta ruta genera la orden
cartsRouter.post("/checkout", getToken, CartController.checkOut);


//cartsRouter.post("/:id", getToken, CartController.saveCartControllers); el carro se crea en el usuario


cartsRouter.get("/", getToken, AdminRole, CartController.getAllCartsController)



export { cartsRouter };
