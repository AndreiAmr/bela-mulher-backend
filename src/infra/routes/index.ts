import { Router } from "express";
import { createUserController } from "../../modules/User/controllers/createUser.controller";
import { validateCreateUser } from "../../modules/User/middlewares/validateCreateUser";

const router = Router();

router.post("/user/create", validateCreateUser, createUserController);

export { router as createUserRouter };
