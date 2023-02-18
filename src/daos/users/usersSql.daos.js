import { MysqlContainer} from "../../managers/mysql.manager,js";

class DaoUsersSQL extends MysqlContainer{
    constructor(options, tablename){
        super(options, tablename)
    }
}

export {DaoUsersSQL}