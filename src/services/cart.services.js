import { DaoCartContainer } from "../config/daosConfig.js"

export const getById = async(id)=>{
    return await DaoCartContainer.getById(id)
}

export const save = async(body)=>{
    return await DaoCartContainer.save(body)
}


export const cleanCart = async(id)=>{
    return await DaoCartContainer.cleanCart(id)
}

export const removeById = async(id)=>{
    return await DaoCartContainer.removeById(id)
}
