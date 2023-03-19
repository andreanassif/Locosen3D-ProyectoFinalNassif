import { MongoContainer } from "../../managers/mongo.manager.js";

class DaoUserMongo extends MongoContainer{
    constructor(model, dto){
        super(model, dto)
    }
    //busca un user por email
    async getByEmail(email){
        return await this.model.findOne({email})
    }


}

export {DaoUserMongo}