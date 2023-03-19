import express from "express";
import { login, registro } from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/registro", registro);

authRouter.get("/login", login)

export {authRouter};