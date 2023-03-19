import {
  getUsers,
  saveUser,
  deleteUser,
  deleteUsers,
} from "../services/user.services.js";
import {} from "../services/cart.services.js";

export const getUsersController = async (req, res) => {
  try {
    const users = await getUsers();
    res.status(200).json({ data: users });
  } catch (error) {
    res.status(400).json({ message: `Hubo un error ${error}` });
  }
};

export const saveUserController = async (req, res) => {
  try {
    const user = await saveUser(req.body);
    res.status(200).json({ data: user });
  } catch (error) {
    res.status(400).json({ message: `Hubo un error ${error}` });
  }
};

export const deleteUserController = async (req, res) => {
  const userID = req.params.id;
  try {
    const response = await deleteUser(userID);
    res.status(200).json({ message: response });
  } catch (error) {
    res.status(400).json({ message: `Hubo un error ${error}` });
  }
};

export const deleteUsersController = async (req, res) => {
  try {
    const response = await deleteUsers();
    res.status(200).json({ message: response });
  } catch (error) {
    res.status(400).json({ message: `Hubo un error ${error}` });
  }
};
