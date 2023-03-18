import {MongoContainer} from "../../managers/mongo.manager.js";
//importar dtos y usarlos


class DaoCartsMongo extends MongoContainer{
    constructor(model, dto){
        super(model, dto)


    }

    // si quiero usar dtos, tengo que agregarlos aca (ESTAN EN EL CART CONTROLLER)
    //async cleanCart(id){
    //    try {
    //        
    //    } catch (error) {
    //        
    //    }
        //logica de eliminar el carrito con el id
    //}
}

export {DaoCartsMongo}