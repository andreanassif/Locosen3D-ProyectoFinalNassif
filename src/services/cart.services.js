import { DaoCartsContainer } from "../config/daosConfig.js";

export const getCartById = async (cartID) => {
  return await DaoCartsContainer.getById(cartID);
};

//esto es para crear un carrito por usuario generado
export const saveCart = async (userID) => {
  return await DaoCartsContainer.save({ userID });
};

export const cleanCart = async (cartID, productID) => {
  return await DaoCartsContainer.cleanCart(cartID, productID);
};

export const removeProdById = async (cartID, productID) => {
  return await DaoCartsContainer.deletePodInCartById(cartID, productID);
};

export const addProdInCartById = async (cartID, productID) => {
  return await DaoCartsContainer.addPodInCartById(cartID, productID);
};

export const getAllCarts = async () => {
  return await DaoCartsContainer.getAll();
};
