import { config } from "dotenv";
import path from "path";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const options = {

    fileSystem:{
        pathProducts: 'products.json',
        pathCarts: 'carts.json'
    },
    sqliteDB:{
        client:"sqlite3",
        connection:{
            filename:path.join(__dirname , "../DB/ecommerce.sqlite")
        },
        useNullAsDefault: true
    },
   mongoDB:{
    url: config.MONGO_AUTHENTICATION
   }
    
}