import { logger, loggerError, loggerWarn } from "../loggers/logger.js";

class MongoContainer {
  constructor(model, dto) {
    this.model = model;
    this.dto = dto;
  }

  async getById(id) {
    try {
      const response = await this.model.findById(id);
      const data = JSON.parse(JSON.stringify(response)); //convertir a formato json
      const responseDto = this.dto(data);
      logger.info(responseDto);
      return responseDto;
    } catch (error) {
      loggerError.error(`Hubo un error ${error}`);
    }
  }

  async getAll() {
    try {
      const response = await this.model.find();
      const data = JSON.parse(JSON.stringify(response));
      const responseDto = this.dto(data);
      logger.info(data);
      return responseDto;
    } catch (error) {
      loggerError.error(`Hubo un error ${error}`);
    }
  }

  async save(body) {
    try {
      const response = await this.model.create(body);
      const data = JSON.parse(JSON.stringify(response));
      logger.info(data);
      return data;
    } catch (error) {
      loggerError.error(`Hubo un error ${error}`);
    }
  }

  async updateById(id, body) {
    try {
      await this.model.findByIdAndUpdate(id, body, { new: true });
      logger.info("Update successfully");
      return
    } catch (error) {
      loggerError.error(`Hubo un error ${error}`);
    }
  }

  async deleteById(id) {
    try {
      await this.model.findByIdAndDelete(id);
      logger.info("delete successfully");
      return
    } catch (error) {
      loggerError.error(`Hubo un error ${error}`);
    }
  }

  async delete() {
    try {
      await this.model.deleteMany({});
      return "delete all successfully";
    } catch (error) {
      loggerError.error(`Hubo un error ${error}`);
    }
  }

  async addPodInCartById(id){
    try {
      await this.model.findByIdAndUpdate({id});
      console.log(id)
      logger.info("Update successfully");
      return
    } catch (error) {
      loggerError.error(`Hubo un error ${error}`);
    }
  }
}

export { MongoContainer };
