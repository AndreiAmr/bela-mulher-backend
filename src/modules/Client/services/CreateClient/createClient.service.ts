import { ClientDatabase } from "@database/Client.database";
import { MakeCreateClientService } from "./createClientService.factory";

const clientDatabase = ClientDatabase.getInstance();
const createClientServiceFactory = new MakeCreateClientService(clientDatabase);

const createClientService = createClientServiceFactory.handle.bind(
  createClientServiceFactory
);

export { createClientService };
