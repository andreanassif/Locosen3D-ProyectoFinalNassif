import express from "express";
import * as UserController from "../controllers/user.controllers.js";

const router = express.Router();

router.get("/users",UserController.getUsersController);
router.post("/user",UserController.saveUserController);

export {router as apiRouter};