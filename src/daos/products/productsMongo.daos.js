import { MongoContainer } from "../../managers/mongo.manager.js";
class DaoProductsMongo extends MongoContainer {
  constructor(model, dto) {
    super(model, dto);
  }
}

export { DaoProductsMongo };