import { MongoContainer } from "../../managers/mongo.manager.js";
import { loggerError } from "../../loggers/logger.js";

class DaoOrderMongo extends MongoContainer{
    constructor(model, dto){
        super(model,dto)
    }

    async checkOut(username, cart) {
        try {
          const response = await this.model.create(cart);
          const data = JSON.parse(JSON.stringify(response));
          //const orderDto = this.dto(username, )
          return data;
        } catch (error) {
          loggerError.error(`Hubo un error ${error}`);
        }
      }

    /* async checkOut(cart){
        try {
            const data = await this.model.findById(cartID)
            console.log(data)
            data.products.$push({body})
            data.save()
        } catch (error) {
            loggerError.error(`Hubo un error ${error}`);
        }
      } */

}

export {DaoOrderMongo}