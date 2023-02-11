import { connectDB } from "../config/dbConfig.js";
import { logger } from "../loggers/logger.js";

connectDB();
class MongoContainer {
  constructor(model) {
    this.model = model;
  }

  async getById(id) {
    try {
      const response = await this.model.findById(id);
      const data = JSON.parse(JSON.stringify(response)); //convertir a formato json
      return logger.info(data);
    } catch (error) {
      throw new Error(logger.error(`Hubo un error ${error}`));
    }
  }

  async getAll() {
    try {
      const response = await this.model.find();
      const data = JSON.parse(JSON.stringify(response));
      return logger.info(data);
    } catch (error) {
      throw new Error(logger.error(`Hubo un error ${error}`));
    }
  }

  async save(body) {
    try {
      const response = await this.model.create(body);
      const data = JSON.parse(JSON.stringify(response));
      return logger.info(data);
    } catch (error) {
      throw new Error(logger.error(`Hubo un error ${error}`));
    }
  }

  async updateById(body, id) {
    try {
      await this.model.findByIdAndUpdate(id, body, { new: true });
      return logger.info("Update successfully");
    } catch (error) {
      throw new Error(logger.error(`Hubo un error ${error}`));
    }
  }

  async deleteById(id) {
    try {
      await this.model.findByIdAndDelete(id);
      return logger.info("delete successfully");
    } catch (error) {
      throw new Error(logger.error(`Hubo un error ${error}`));
    }
  }
}

export { MongoContainer };
