import { MongoContainer } from "../../managers/mongo.manager.js";

class DaoUserMongo extends MongoContainer{
    constructor(model, dto){
        super(model, dto)
    }


}

export {DaoUserMongo}