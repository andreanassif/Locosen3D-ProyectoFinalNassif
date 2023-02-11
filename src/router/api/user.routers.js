import express from "express";
import * as UserController from "../../controllers/user.controller.js";

const router = express.Router();

router.get("/", UserController.getUsersController);
router.post("/",UserController.saveUserController);

export {router as UserRouter};