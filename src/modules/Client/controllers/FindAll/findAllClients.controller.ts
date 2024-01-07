import { findAllClientsService } from "@modules/Client/services/FindAll/findAllClients.service";
import { MakeFindAllClientsController } from "./findAllClientsController.factory";

const findAllClientsControllerFactory = new MakeFindAllClientsController(
  findAllClientsService
);

const findAllClientsController = findAllClientsControllerFactory.execute.bind(
  findAllClientsControllerFactory
);

export { findAllClientsController };
