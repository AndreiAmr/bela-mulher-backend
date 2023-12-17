import { Router } from "express";
import { loginRouter } from "./Authentication/login.routes";
import { createUserRouter } from "./User/createUser.routes";

const router = Router();

router.use(loginRouter);
router.use(createUserRouter);

export { router as mainRoutes };
