import { MysqlContainer } from "../../managers/mysql.manager";

class DaoProductsSQL extends MysqlContainer{
    constructor(options, tableName){
        super(options, tableName)
    }
}

export {DaoProductsSQL};