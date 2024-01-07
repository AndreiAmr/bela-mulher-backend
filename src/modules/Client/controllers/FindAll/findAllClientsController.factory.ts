import { type IFindAllClientsService } from "@modules/Client/services/FindAll/findAllClientsService.factory";

export class MakeFindAllClientsController {
  constructor(private readonly findAllClientsService: IFindAllClientsService) {}

  public async execute(req: any, res: any, next: any): Promise<void> {
    const clients = await this.findAllClientsService();
    if (!clients) {
      res.status(500).json({ message: "Internal server error" }).send();
      return;
    }

    res.status(200).json(clients).send();
  }
}
