import { MongoContainer } from "../managers/mongo.manager,js";

class ProductsDaosMongo extends MongoContainer{
    constructor(model){
        super(model)
    }
}

export {ProductsDaosMongo}