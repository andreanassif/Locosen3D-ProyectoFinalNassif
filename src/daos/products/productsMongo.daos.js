import { MongoContainer } from "../../managers/mongo.manager.js"

class DaoProductsMongo extends MongoContainer{
    constructor(model){
    
        super (model)
    }

    async getAll(){
        try {
            const response = await this.model.find();
            //const data = JSON.parse(JSON.stringify(response));
            //const responseDto = convertToDto(data)
            //return logger.info(data);
            //return(responseDto);
            console.log(response)
            return response
          } catch (error) {
            throw new Error(`Hubo un error ${error}`);
          }
    }
}

export {DaoProductsMongo}