import { createClientService } from "@modules/Client/services/CreateClient/createClient.service";
import { MakeCreateClientController } from "./createClientController.factory";

const createClientControllerFactory = new MakeCreateClientController(
  createClientService
);

const createClientController = createClientControllerFactory.execute.bind(
  createClientControllerFactory
);

export { createClientController };
