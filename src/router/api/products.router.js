import express from "express";
import { AdminRole } from "../../middlewares/checkRoles.js";
import * as ProductsController from "../../controllers/product.controller.js";
import { getToken } from "../../middlewares/token.js";

// http://localhost:8080/api/products

const productsRouter = express.Router();

productsRouter.get("/", ProductsController.getProdsControllers);

productsRouter.get("/:id", ProductsController.getProdByIdControllers);

productsRouter.get(
  "/category/:category",
  ProductsController.getProdByCategoryControllers
);

productsRouter.get("/img/:id", ProductsController.getImgByIdControllers);

productsRouter.post(
  "/",
  getToken,
  AdminRole,
  ProductsController.saveProdController
);

productsRouter.put(
  "/:id",
  getToken,
  AdminRole,
  ProductsController.updateProdController
);

productsRouter.delete(
  "/",
  getToken,
  AdminRole,
  ProductsController.deleteAllController
);

productsRouter.delete(
  "/:id",
  getToken,
  AdminRole,
  ProductsController.deleteProdController
);

export { productsRouter };
