import bcrypt from "bcrypt";
import { SingToken } from "../middlewares/token.js";
import {
  getUsers,
  saveUser,
  deleteUser,
  deleteUsers,
  getUserbyEmail,
} from "../services/user.services.js";
import { saveCart } from "../services/cart.services.js";

const createHash = (password) => {
  const hash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  return hash;
};

export const registro = async (req, res) => {
  try {
    const { body } = req;
    body.password = createHash(body.password);
    const newUser = await saveUser(body);
    console.log(newUser._id);
    await saveCart(newUser._id);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

export async function DecodePassword(password, encryptedPassword) {
  return await bcrypt.compare(password, encryptedPassword);
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.sendStatus(404);
    }
    const user = await getUserbyEmail(email);
    if (!user) {
      return res.sendStatus(404);
    }
    const truePassword = await DecodePassword(password, user.password);
    if (!truePassword) {
      return res.sendStatus(404);
    }

    const token = await SingToken({
      role: user.role,
      userID: user._id,
    });

    res.json({ token });
  } catch (error) {
    console.log(error);
  }
};
