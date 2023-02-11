import {options} from "../config/options.js";
import { CartModel } from "../models/dbModels/cart.models.js";
import { ProductModel } from "../models/dbModels/products.models.js";

let DaoProductsContainer;
let DaoCartsContainer;

//identificador
let databaseType = "mongo";

switch(databaseType){
    case "archivos":
        const {DaoProductsFile} = await import("./products/productsFiles.daos.js");
        const {DaoCartsFile} = await import("./carts/cartsFiles.daos.js");
        DaoProductsContainer = new DaoProductsFile(options.fileSystem.pathProducts);
        DaoCartsContainer = new DaoCartsFile(options.fileSystem.pathCarts);
        break;
    case "sql":
        const {DaoProductsSQL} = await import("./products/productsSql.daos.js");
        const {DaoCartsSQL} = await import("./carts/cartsSql.daos.js");
        DaoProductsContainer = new DaoProductsSQL(options.sqliteDB, "productos");
        DaoCartsContainer = new DaoCartsSQL(options.sqliteDB,"carritos");
        break;
    case "mongo":
        const {DaoProductsMongo} = await import("./products/productgsMongo.daos.js");
        const {DaoCartsMongo} = await import("./carts/cartsMongo.daos.js");
        DaoProductsContainer = new DaoProductsMongo(ProductModel);
        DaoCartsContainer = new DaoCartsMongo(CartModel);
        break;
}

export {DaoProductsContainer,DaoCartsContainer}