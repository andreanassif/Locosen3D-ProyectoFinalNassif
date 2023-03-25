import express from "express";
import * as UserController from "../../controllers/user.controllers.js";
import { getToken } from "../../middlewares/token.js";
import { AdminRole } from "../../middlewares/checkRoles.js";

const router = express.Router();

router.get("/", getToken, AdminRole, UserController.getUsersController);
router.post("/", UserController.saveUserController);
router.delete("/:id", getToken, AdminRole, UserController.deleteUserController);
router.delete("/", getToken, AdminRole, UserController.deleteUsersController);

export { router as UserRouter };
