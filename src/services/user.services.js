import { DaoUserContainer } from "../config/daosConfig.js";

export const getUsers = async () => {
  return await DaoUserContainer.getAll();
};

export const getUserbyEmail = async (email) => {
  return await DaoUserContainer.getByEmail(email);
};

export const saveUser = async (body) => {
  try {
    return await DaoUserContainer.save(body);
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteUser = async (userID) => {
  return await DaoUserContainer.deleteById(userID);
};

export const deleteUsers = async () => {
  return await DaoUserContainer.delete();
};
