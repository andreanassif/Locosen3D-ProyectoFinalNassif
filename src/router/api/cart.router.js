//HACER CONTROLLER COMO USER

import express from "express";
import { options } from "../../config/config.js";
import { FilesContainer } from "../../managers/files.manager.js";
import { MysqlContainer } from "../../managers/mysql.manager.js";
//import { DaoProductsContainer, DaoCartsContainer } from "../../daos/index.js";
import { getApiDao } from "../../daos/index.js";
import * as CartController from "../../controllers/cart.controller.js"

//managers
//const ApiProducts = new FileContainer (options.filesystem.pathProdcts);
//const ApiCarts = new MysqlContainer(options.fileSystem.pathCarts);
//const ApiProducts = new MysqlContainer(options.sqliteDB, "products");
//const ApiCarts = new MysqlContainer(options.sqliteDB, "carts");
//const {ApiCarts, ApiProducts} = getApiDao(options.server.databaseType);


//http://localhost:8080/api/cart
const cartsRouter = express.Router();

cartsRouter.post('/', CartController.saveCartControllers )

cartsRouter.post('/:id', CartController.saveCartControllers)

cartsRouter.get('/:id', CartController.getCartController)

cartsRouter.delete('/:id', CartController.cleanCartControllers)


/* cartsRouter.get('/', async (req, res) => {
    const response = await ApiCarts.getAll();
    res.json(response);
})

cartsRouter.post('/', async (req, res) => {
    const response = await ApiCarts.save({ products: [], timestamp: new Date().toLocaleDateString() });
    res.json(response);
})

cartsRouter.delete('/:id', async (req, res) => {
    const cartId = req.params.id;
    res.json(await ApiCarts.deleteById(cartId));
})

cartsRouter.get('/:id/productos', async (req, res) => {
    const cartId = req.params.id;
    const cartResponse = await ApiCarts.getById(cartId);
    if(cartResponse.error){
        res.json(cartResponse);
    } else{
        const getData = async()=>{
            const products = await Promise.all(cartResponse.message.products.map(async(element) => {
                const productResponse = await ApiProducts.getById(element);
                return productResponse.message
            }));
            res.json({products: products});
        }
        getData();
    }
})

cartsRouter.post('/:id/productos', async (req, res) => {
    const cartId = req.params.id;
    const productId = req.body.id;
    const cartResponse = await ApiCarts.getById(cartId);
    if(cartResponse.error){
        res.json({message:`El carrito con id: ${cartId} no fue encontrado`});
    } else{
        const prodResponse = await ApiProducts.getById(productId);
        if(prodResponse.error){
            res.json(prodResponse);
        } else{
            cartResponse.message.products.push(prodResponse.message.id);
            const response = await ApiCarts.updateById(cartResponse.message, cartId);
            res.json({message:"product added"});
        }
    }
})

cartsRouter.delete('/:id/productos/:idProd', async (req, res) => {
    const cartId = req.params.id;
    const productId = req.params.idProd;
    const cartResponse = await ApiCarts.getById(cartId);
    if(cartResponse.error){
        res.json({message:`El carrito con id: ${cartId} no fue encontrado`});
    } else{
        const index = cartResponse.message.products.findIndex(p => p === productId);
        if (index !== -1) {
            cartResponse.message.products.splice(index, 1);
            await ApiCarts.updateById(cartResponse.message, cartId);
            res.json({message:"product deleted"});
        } else{
            res.json({message:`El producto no se encontro en el carrito: ${productId}`});
        }
    }
}) */

export {cartsRouter}