import { DaoOrderContainer } from "../config/daosConfig.js";

//la orden se genera y guarda en el checkout de carrito
export const saveOrder = async (body) => {
  return await DaoOrderContainer.save(body);
};

export const getOrder = async (body) => {
  return await DaoOrderContainer.getAll(body);
};

export const getOrderByUserID = async (userID) => {
  return await DaoOrderContainer.getById(userID);
};

export const deleteOrder = async (orderId) => {
  return await DaoOrderContainer.deleteById(orderId);
};

export const updateOrder = async (orderId) => {
  return await DaoOrderContainer.updateById(orderId);
};
