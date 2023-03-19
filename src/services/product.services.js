import { DaoProductsContainer } from "../config/daosConfig.js";


export const getProducts = async()=>{
   return await DaoProductsContainer.getAll();
}

export const getProdById = async(id)=>{
    return await DaoProductsContainer.getById(id)
}
export const saveProd = async(body)=>{
    return await DaoProductsContainer.save(body)
}
export const deleteProd = async(id)=>{
    return await DaoProductsContainer.deleteById(id)
}
export const updateProd = async(id, body)=>{
    return await DaoProductsContainer.updateById(id,body)
}

export const getImgById = async(id, body)=>{
    return await DaoProductsContainer.getImgById(id, body)
}
export const deleteAll = async()=>{
    return await DaoProductsContainer.deleteAll()
}