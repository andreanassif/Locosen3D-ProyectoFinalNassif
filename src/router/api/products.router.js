import express from "express";
import { checkLogin } from "../../middlewares/checkLogin.js";
import { options } from "../../config/options.js"; 
import { FilesContainer } from "../../managers/files.manager.js";
import { MysqlContainer } from "../../managers/mysql.manager.js"; 
import { DaoProductsContainer } from "../../daos/index.js";
import { AdminRole } from "../../middlewares/checkRoles.js";

//products manager
//const ApiProducts = new FilesContainer(options.fileSystem.pathProducts);
//const ApiProducts = new MysqlContainer(options.sqliteDB, "products");
const ApiProducts = DaoProductsContainer;

// products router
const productsRouter = express.Router();

productsRouter.get('/', checkLogin,async (req, res) => {
    const response = await ApiProducts.getAll()
    res.json(response)
})

productsRouter.get('/:id', async (req, res) => {
    const productId = req.params.id;
    const response = await ApiProducts.getById(productId);
    res.json(response);
})

productsRouter.post('/', AdminRole, async (req, res) => {
    const response = await ApiProducts.save(req.body);
    res.json(response)
})

productsRouter.put('/:id', AdminRole, async (req, res) => {
    const productId = req.params.id;
    const response = await ApiProducts.updateById(req.body, productId);
    res.json(response);
})

productsRouter.delete('/:id', AdminRole, async (req, res) => {
    const productId = req.params.id;
    const response = await ApiProducts.deleteById(productId);
    res.json(response);
})

export {productsRouter}