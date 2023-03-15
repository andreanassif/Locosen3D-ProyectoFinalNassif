import {MongoContainer} from "../../managers/mongo.manager.js";
//importar dtos y usarlos


class DaoCartsMongo extends MongoContainer{
    constructor(model){
        super(model)


    }

    // si quiero usar dtos, tengo que agregarlos aca
    async cleanCart(id){
        try {
            
        } catch (error) {
            
        }
        //logica de eliminar el carrito con el id
    }
}

export {DaoCartsMongo}