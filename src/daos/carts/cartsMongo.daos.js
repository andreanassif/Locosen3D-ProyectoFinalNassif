import {MongoContainer} from "../../managers/mongo.manager.js";
import {loggerError, logger} from "../../loggers/logger.js"
//importar dtos y usarlos


class DaoCartsMongo extends MongoContainer{
    constructor(model, dto){
        super(model, dto)

    }

    async addPodInCartById(cartID, productID){
        try {
          const data = await this.model.findByIdAndUpdate({_id:cartID}, {$push:{products:productID}});
          logger.info("Producto agregado");
          return
        } catch (error) {
          loggerError.error(`Hubo un error ${error}`);
        }
      }

      async deletePodInCartById(cartID, productID){
        try {
          const data = await this.model.findById(cartID);
          const index = data.products.indexOf(productID);
          data.products.splice(index,1);
          data.save()
          logger.info("Producto eliminado del carrito");
          return
        } catch (error) {
          loggerError.error(`Hubo un error ${error}`);
        }
      }

      async cleanCart(cartID){
        try {
          const data = await this.model.findByIdAndUpdate({_id:cartID}, {products:[]});
          logger.info("El carrito se vació correctamente");
          return
        } catch (error) {
          loggerError.error(`Hubo un error ${error}`);
        }
      }
      async getById(id) {
    
        try {
          const response = await this.model.findById(id).populate("products");
          const data = JSON.parse(JSON.stringify(response)); //convertir a formato json
          const responseDto = this.dto(data);
          //logger.info(responseDto);
          return responseDto;
        } catch (error) {
          loggerError.error(`Hubo un error ${error}`);
        }
      }

/* 
      async checkOut(cartID, productID){
        try {
            
            const data = await this.model.findByIdAndUpdate({_id:cartID}, {$push:{products:productID}})
            console.log(data)
            data.products.$push({body})
            data.save()
        } catch (error) {
            loggerError.error(`Hubo un error ${error}`);
        }
      } */

}

export {DaoCartsMongo}