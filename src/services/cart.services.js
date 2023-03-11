import {getApiDao} from "../daos/index.js";
import {options} from "../config/config.js";

const {DaoCartsContainer} = await getApiDao(options.server.databaseType)

export const getById = async(id)=>{
    return await DaoCartsContainer.getById(id)
}

export const save = async(body)=>{
    return await DaoCartsContainer.save(body)
}

export const putById = async(id,update)=>{
    return await DaoCartsContainer.putById(id, update)
}

export const deleteById = async(id)=>{
    return await DaoCartsContainer.deleteById(id)
}
