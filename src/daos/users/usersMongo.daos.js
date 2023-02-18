import { MongoContainer } from "../../managers/mongo.manager.js";

class DaoUserMongo extends MongoContainer{
    constructor(model){
        super(model)
    }
}

export {DaoUserMongo}