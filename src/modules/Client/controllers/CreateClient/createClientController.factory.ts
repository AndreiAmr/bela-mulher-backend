export class MakeCreateClientController {
  constructor(private readonly createClientService: any) {}
  public async execute(req: any, res: any): Promise<void> {
    const { name, phone } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }
    if (!phone) {
      return res.status(400).json({ message: "Phone is required" });
    }

    const newClient = await this.createClientService({ name, phone });
    return res.status(201).json(newClient);
  }
}
