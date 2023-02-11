import { options } from "../config/options.js";
import knex from "knex";
import { logger } from "../loggers/logger.js";

const databaseSqliteDb =knex(options.sqliteDB);

const createTable = async ()=>{
    try {
        //0. verificamos si existe la tabla de productos
        const tableProductsExists = await databaseSqliteDb.schema.hasTable("products");
        if(tableProductsExists){
            await databaseSqliteDb.schema.dropTable("products");
        }
        //1.crear tabla productos
        await databaseSqliteDb.schema.createTable("products",table=>{
            table.increments("id");
            table.string("title",40).nullable(false);
            table.integer("price").nullable(false);
            table.string("thumbnail",200).nullable(false);
        });
        logger.info("Product table created");

        //0. verificamos si existe tabla de carrito
        const tableCartExists = await databaseSqliteDb.schema.hasTable("carts");
        if(tableCartExists){
            await databaseSqliteDb.schema.dropTable("carts");
        }
        //1.crear la tabla carrito
        await databaseSqliteDb.schema.createTable("carts",table=>{
            table.increments("id");
            table.string("timestamp").nullable(false);
            table.string("products").nullable(false);
        });
        logger.info("carritos table created");
    } catch (error) {
        logger.error(`Hubo un error${error} `)
    }
    databaseSqliteDb.destroy();
}