import {MongoContainer} from "../../managers/mongo.manager.js";

class DaoCartsMongo extends MongoContainer{
    constructor(model){
        super(model)
    }
}

export {DaoCartsMongo}