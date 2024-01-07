import { type IClientDatabase } from "@database/Client.database";
import { type Client } from "@prisma/client";
import { type CreateClientDTO } from "src/types/client";

export class MakeCreateClientService {
  constructor(private readonly clientDatabase: IClientDatabase) {}

  public async handle(client: CreateClientDTO): Promise<Client> {
    const newClient = await this.clientDatabase.create(client);
    return newClient;
  }
}
