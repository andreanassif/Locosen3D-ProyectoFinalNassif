import { DaoCartsContainer } from "../config/daosConfig.js";

export const getCartById = async (id) => {
  console.log(id)
  return await DaoCartsContainer.getById(id);
  
};

//esto es para crear un carrito por usuario generado
export const saveCart = async (userID) => {
  return await DaoCartsContainer.save({ userID });
};

export const cleanCart = async (cartID) => {
  return await DaoCartsContainer.cleanCart(cartID);
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
