import { MongoContainer } from "../../managers/mongo.manager.js";

class DaoOrderMongo extends MongoContainer{
    constructor(model, dto){
        super(model,dto)
    }
}

export {DaoOrderMongo}