import { createClientController } from "@modules/Client/controllers/CreateClient/createClient.controller";
import { findAllClientsController } from "@modules/Client/controllers/FindAll/findAllClients.controller";
import { validateCreateClient } from "@modules/Client/middlewares/validateCreateClient";
import { Router } from "express";

const router = Router();

router.get("/client/findAll", findAllClientsController);
router.post("/client/create", validateCreateClient, createClientController);

export { router as clientRoutes };
