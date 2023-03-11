// creamos la fabrica para unificar 
import { UserModel } from "../models/dbModels/users.models.js"
import { ProductModel } from "../models/dbModels/products.models.js";
import { CartModel } from "../models/dbModels/cart.models.js";
import {options} from "../config/config.js";
import { MyMongoClient } from "../models/clients/dbClientMongo.js";

export async function getApiDao(databaseType){
    let DaoProductsContainer;
    let DaoCartsContainer;
    let DaoUserContainer;
    //let DaoOrderContainer;
    //let DaoMsjContainer;
    console.log(databaseType)

    switch(databaseType){
        case "FILES":
            const {DaoProductsFile} = await import("./products/productsFiles.daos.js");
            const {DaoCartsFile} = await import("./carts/cartsFiles.daos.js");
            const {DaoUserFile} = await import("./users/usersFiles.daos.js");
            //conectar a la base de datos
            DaoProductsContainer = new DaoProductsFile(options.fileSystem.pathProducts);
            DaoCartsContainer = new DaoCartsFile(options.fileSystem.pathCarts);
            DaoUserContainer = new DaoUserFile(options.fileSystem.pathUsers);
            break;
        case "SQL":
            const {DaoUsersSQL} = await import("./users/usersSql.daos.js");
            const {DaoProductsSQL} = await import("./products/productsSql.daos.js");
            const {DaoCartsSQL} = await import("./carts/cartsSql.daos.js");
            //conectar a la base de datos
            DaoProductsContainer = new DaoProductsSQL(options.sqliteDB, "productos");
            DaoCartsContainer = new DaoCartsSQL(options.sqliteDB,"carritos");
            DaoUserContainer = new DaoUsersSQL(options.sqliteDB, "users");
            break;
        case "MONGO":
            const {DaoUserMongo} = await import("./users/usersMongo.daos.js");
            const {DaoProductsMongo} = await import("./products/productsMongo.daos.js");
            const {DaoCartsMongo} = await import("./carts/cartsMongo.daos.js");
            //conectar a la base de datos
            const client = new MyMongoClient();
            await client.connect();
            DaoProductsContainer = new DaoProductsMongo(ProductModel);
            DaoCartsContainer = new DaoCartsMongo(CartModel);
            DaoUserContainer = new DaoUserMongo(UserModel);

            break;
        default:
            break;
    }
    return {DaoUserContainer,DaoCartsContainer,DaoProductsContainer}
}