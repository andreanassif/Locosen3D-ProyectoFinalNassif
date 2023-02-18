import express from "express";
import * as UserController from "../../controllers/user.controllers.js";

const router = express.Router();

router.get("/",UserController.getUsersController);
router.post("/",UserController.saveUserController);
router.delete("/:id",UserController.deleteUserController);
router.delete("/",UserController.deleteUsersController);

export {router as UserRouter};