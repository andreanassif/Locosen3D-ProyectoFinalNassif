import { MongoContainer } from "../../managers/mongo.manager.js"

class DaoProductsMongo extends MongoContainer{
    constructor(model){
        super (model)
    }
}

export {DaoProductsMongo}