import express from "express";
import { AdminRole } from "../../middlewares/checkRoles.js";
import * as ProductsController from "../../controllers/product.controller.js"


// http://localhost:8080/api/products

const productsRouter = express.Router();

productsRouter.get('/', ProductsController.getProdsControllers)

productsRouter.get('/:id', ProductsController.getProdByIdControllers)

productsRouter.get('/category/:category', ProductsController.getProdByCategoryControllers)

productsRouter.get('/img/:id', ProductsController.getImgByIdControllers)

productsRouter.post('/', AdminRole, ProductsController.saveProdController)

productsRouter.put('/:id', AdminRole, ProductsController.updateProdController)

productsRouter.delete('/', AdminRole, ProductsController.deleteAllController)

productsRouter.delete('/:id', AdminRole, ProductsController.deleteProdController)

export {productsRouter}