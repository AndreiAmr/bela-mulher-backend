import { type IClientDatabase } from "@database/Client.database";
import { type Client } from "@prisma/client";

export interface IFindAllClientsService {
  (): Promise<Client[]>;
}

export class MakeFindAllClients {
  constructor(private readonly clientDatabase: IClientDatabase) {}

  public async handle(): Promise<Client[]> {
    const clients = await this.clientDatabase.findAll();
    return clients;
  }
}
