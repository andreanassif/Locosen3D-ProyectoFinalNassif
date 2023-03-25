import knex from "knex";
import { logger } from "../loggers/logger.js";
class MysqlContainer {
  constructor(options, tableName) {
    this.database = knex(options);
    this.tableName = tableName;
  }

  async getById(id) {
    try {
      const product = await this.database.from(this.tableName).where("id", id);
      if (!product.length) {
        return logger.error({
          message: `Error: no se encontró el id ${id}`,
          error: true,
        });
      } else {
        if (product[0].products) {
          product[0].products = JSON.parse(product[0].products);
        }
        return logger.info({ message: product[0], error: false });
      }
    } catch (error) {
      return logger.error({ message: `Hubo un error ${error}`, error: true });
    }
  }

  async getAll() {
    try {
      let response = await this.database.from(this.tableName).select("*");
      let results = response.map((elm) => {
        if (elm.products) {
          return { ...elm, products: JSON.parse(elm.products) };
        } else {
          return { ...elm };
        }
      });
      return results;
    } catch (error) {
      return [];
    }
  }

  async save(product) {
    try {
      if (product.products) {
        product.products = JSON.stringify(product.products, null, 2);
      }
      const [userId] = await this.database.from(this.tableName).insert(product);
      return logger.info(`new product saved with id: ${userId}`);
    } catch (error) {
      return logger.error({ message: `Error al guardar: ${error}` });
    }
  }

  async updateById(body, id) {
    try {
      if (body.products) {
        body.products = JSON.stringify(body.products);
      }
      await this.database.from(this.tableName).where("id", id).update(body);
      return logger.info({ message: "Update successfully" });
    } catch (error) {
      return logger.error({
        message: `Error al actualizar: no se encontró el id ${id}`,
      });
    }
  }

  async deleteById(id) {
    try {
      const result = await this.database
        .from(this.tableName)
        .where("id", id)
        .del();
      if (result === 0) {
        return logger.error({ message: `Error: No se encontro el id: ${id}` });
      } else {
        return logger.info({ message: "delete successfully" });
      }
    } catch (error) {
      return logger.error({ message: `Error: no se encontró el id ${id}` });
    }
  }

  async deleteAll() {
    try {
      await this.database.from(this.tableName).del();
      return logger.info({ message: "delete successfully" });
    } catch (error) {
      return logger.error({ message: `Error al borrar todo: ${error}` });
    }
  }
}

export { MysqlContainer };