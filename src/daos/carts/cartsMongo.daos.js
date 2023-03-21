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

      async checkOut(cartID, body){
        try {
            const data = await this.modeñl.findById(cartID)
            data.products.save(body)
            console.log(data)
        } catch (error) {
            loggerError.error(`Hubo un error ${error}`);
        }
      }


    // si quiero usar dtos, tengo que agregarlos aca (ESTAN EN EL CART CONTROLLER)
    //async cleanCart(id){
    //    try {
    //        
    //    } catch (error) {
    //        
    //    }
        //logica de eliminar el carrito con el id 

        //agregar el producto
        //
    //}
}

export {DaoCartsMongo}