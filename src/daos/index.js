import {options} from "../config/options.js";
import { CartModel } from "../models/dbModels/cart.models.js";
import { ProductModel } from "../models/dbModels/products.models.js";
import { UserModel } from "../models/dbModels/users.models.js"
//MONGO CLIENT FALTA

export async function getApiDao(databaseType){
let DaoProductsContainer;
let DaoCartsContainer;
let DaoUserContainer;

switch(databaseType){
    case "archivos":
        const {DaoProductsFile} = await import("./products/productsFiles.daos.js");
        const {DaoCartsFile} = await import("./carts/cartsFiles.daos.js");
        const {DaoUserFile} = await import("./users/usersFiles.daos.js");
        DaoProductsContainer = new DaoProductsFile(options.fileSystem.pathProducts);
        DaoCartsContainer = new DaoCartsFile(options.fileSystem.pathCarts);
        DaoUserContainer = new DaoUserFile(options.fileSystem.pathUsers);
        break;
    case "sql":
        const {DaoUsersSQL} = await import("./users/usersSql.daos.js");
        const {DaoProductsSQL} = await import("./products/productsSql.daos.js");
        const {DaoCartsSQL} = await import("./carts/cartsSql.daos.js");
        DaoProductsContainer = new DaoProductsSQL(options.sqliteDB, "productos");
        DaoCartsContainer = new DaoCartsSQL(options.sqliteDB,"carritos");
        DaoUserContainer = new DaoUsersSQL(options.sqliteDB, "users");
        break;
    case "mongo":
        const {DaoUserMongo} = await import("./users/usersMongo.daos.js");
        const {DaoProductsMongo} = await import("./products/productsMongo.daos.js");
        const {DaoCartsMongo} = await import("./carts/cartsMongo.daos.js");
        DaoProductsContainer = new DaoProductsMongo(ProductModel);
        DaoCartsContainer = new DaoCartsMongo(CartModel);
        DaoUserContainer = new DaoUserMongo(UserModel);
        break;
    }
    return {DaoUserContainer,DaoCartsContainer,DaoProductsContainer}
}