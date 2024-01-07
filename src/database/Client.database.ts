import { type Client } from "@prisma/client";
import { type CreateClientDTO } from "src/types/client";
import { prisma } from "../prisma/prisma";

export interface IClientDatabase {
  findAll(): Promise<Client[]>;
  create(client: CreateClientDTO): Promise<Client>;
}

export class ClientDatabase implements IClientDatabase {
  private static instance: ClientDatabase;

  constructor() {}

  public static getInstance(): ClientDatabase {
    if (!ClientDatabase.instance) {
      ClientDatabase.instance = new ClientDatabase();
    }
    return ClientDatabase.instance;
  }

  public async findAll(): Promise<Client[]> {
    const clients = await prisma.client.findMany();
    return clients;
  }

  public async create(client: CreateClientDTO): Promise<Client> {
    const newClient = await prisma.client.create({ data: client });
    return newClient;
  }
}
