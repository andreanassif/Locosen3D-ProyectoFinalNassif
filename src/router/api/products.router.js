import express from "express";
import { checkLogin } from "../../middlewares/checkLogin.js";
import { options } from "../../config/config.js"; 
import { FilesContainer } from "../../managers/files.manager.js";
import { MysqlContainer } from "../../managers/mysql.manager.js"; 
//import { DaoProductsContainer } from "../../daos/index.js";
import { getApiDao } from "../../daos/index.js";
import { AdminRole } from "../../middlewares/checkRoles.js";
import { MongoContainer } from "../../managers/mongo.manager.js";
import * as ProductsController from "../../controllers/product.controller.js"

//products manager
//const ApiProducts = new FilesContainer(options.fileSystem.pathProducts);
//const ApiProducts = new MysqlContainer(options.sqliteDB, "products");

// http://localhost:8080/api/products
const productsRouter = express.Router();

productsRouter.get('/', ProductsController.getProdsControllers /* AdminRole,async (req, res) => {
    const ApiDao = await getApiDao(options.server.databaseType);

    const response = await ApiDao.DaoProductsContainer.getAll()
    console.log(response)
    res.json(response)

} */)

productsRouter.get('/:id', ProductsController.getProdByIdControllers /* async (req, res) => {
    const productId = req.params.id;
    const response = await DaoProductsContainer.getById(productId);
    res.json(response);
} */)

productsRouter.get('/category/:category', ProductsController.getProdByCategoryControllers)

productsRouter.get('/img/:id', ProductsController.getImgByIdControllers)

productsRouter.post('/', AdminRole, ProductsController.saveProdController)

/* productsRouter.post('/', AdminRole, async (req, res) => {
    const response = await ApiProducts.save(req.body);
    res.json(response)
}) */

productsRouter.put('/:id', AdminRole, ProductsController.updateProdController)

/* productsRouter.put('/:id', AdminRole, async (req, res) => {
    const productId = req.params.id;
    const response = await ApiProducts.updateById(req.body, productId);
    res.json(response);
}) */

productsRouter.delete('/', AdminRole, ProductsController.deleteAllController)

productsRouter.delete('/:id', AdminRole, ProductsController.deleteProdController)

/* productsRouter.delete('/:id', AdminRole, async (req, res) => {
    const productId = req.params.id;
    const response = await ApiProducts.deleteById(productId);
    res.json(response);
}) */

export {productsRouter}