import { ClientDatabase } from "@database/Client.database";

const clientRepository = new ClientDatabase();
const findAllClientsService = clientRepository.findAll.bind(clientRepository);

export { findAllClientsService };
