import { MysqlContainer } from "../../managers/mysql.manager";

class DaoCartsSQL extends MysqlContainer{
    constructor(options, tableName){
        super(options, tableName)
    }
}

export {DaoCartsSQL};