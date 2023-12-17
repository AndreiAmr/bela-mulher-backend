import { Router } from "express";
import { validateLogin } from "../../../modules/Authentication/Login/middlewares/validateLogin";
import { loginController } from "../../../modules/Authentication/Login/controllers/login.controller";

const router = Router();

router.post("/login", validateLogin, loginController);

export { router as loginRouter };
