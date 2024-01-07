import { createClientController } from "@modules/Client/controllers/CreateClient/createClient.controller";
import { validateCreateClient } from "@modules/Client/middlewares/validateCreateClient";
import { Router } from "express";

const router = Router();

router.post("/client/create", validateCreateClient, createClientController);

export { router as clientRoutes };
