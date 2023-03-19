import { DaoCartsContainer } from "../config/daosConfig.js";

export const getCartById = async (cartID) => {
  return await DaoCartsContainer.getById(cartID);
};

//esto es para crear un carrito por usuario generado
export const saveCart = async (userID) => {
  return await DaoCartsContainer.save({ userID });
};

export const cleanCart = async (cartID) => {
  return await DaoCartsContainer.cleanCart(cartID);
};

export const removeProdById = async (productID) => {
  return await DaoCartsContainer.removeById(productID);
};

export const addProdById = async (productID) => {
  return await DaoCartsContainer.push(productID);
};
