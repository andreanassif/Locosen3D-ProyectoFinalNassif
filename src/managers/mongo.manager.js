import { logger } from "../loggers/logger.js";
import { convertToDto } from "../dto/user.dto.js";

class MongoContainer {
  constructor(model) {
    this.model = model;
  }

  async getById(id) {
    try {
      const response = await this.model.findById(id);
      const data = JSON.parse(JSON.stringify(response)); //convertir a formato json
      const responseDto = convertToDto(data);
      //return logger.info(responseDto);
      return responseDto
    } catch (error) {
      throw new Error(`Hubo un error ${error}`);
    }
  }

  async getAll(){
    try {
      const response = await this.model.find();
      const data = JSON.parse(JSON.stringify(response));
      const responseDto = convertToDto(data)
      //return logger.info(data);
      return(responseDto);
    } catch (error) {
      throw new Error(`Hubo un error ${error}`);
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

  async delete(){
    try {
        await this.model.deleteMany({});
        return "delete all successfully";
    } catch (error) {
        throw new Error(`Hubo un error ${error}`);
    }
}
}

export { MongoContainer };
