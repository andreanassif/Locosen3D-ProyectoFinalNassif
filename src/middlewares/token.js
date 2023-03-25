import jwt from "jsonwebtoken";

export async function SingToken(data) {
  return new Promise((resolve) => {
    jwt.sign(
      data,
      process.env.SECRET,
      { expiresIn: process.env.EXPIRE_TIME },
      (err, token) => {
        if (err) throw err;
        resolve(token);
      }
    );
  });
}

export async function DecodeToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) throw "Token inválido";
      resolve(decoded);
    });
  });
}

export const getToken = async (req, res, next) => {
  try {
    const header = req.headers["authorization"];
    if (!header) throw "No se encontró el header";
    const token = header.split(" ")[1];
    if (!token) throw "No es un token válido";
    req.user = await DecodeToken(token);
    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
};