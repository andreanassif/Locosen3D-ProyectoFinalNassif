import { MysqlContainer } from "../../managers/mysql.manager.js";
class DaoOrderSQL extends MysqlContainer {
  constructor(options, tableName) {
    super(options, tableName);
  }
}

export { DaoOrderSQL };