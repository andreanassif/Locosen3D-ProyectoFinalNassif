import { DaoOrderContainer } from "../config/daosConfig.js";

export const saveOrder = async(body)=>{
    return await DaoOrderContainer.save(body)
}

export const getOrder = async(body)=>{
    return await DaoOrderContainer.getAll(body)
}

export const deleteOrder = async(orderId) => {
    return await DaoOrderContainer.deleteById(orderId)
}

export const updateOrder = async(orderId) => {
    return await DaoOrderContainer.updateById(orderId)
}

//guardar pedido

//obtener pedido

//eliminar un pedido

//modiicar un pedido