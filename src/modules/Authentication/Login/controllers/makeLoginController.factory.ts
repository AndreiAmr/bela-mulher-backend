import { ILoginService } from "../services/makeLoginService.factory";

interface IMakeLoginController {
  execute(req: any, res: any): Promise<void>;
}

export class MakeLoginController implements IMakeLoginController {
  constructor(private readonly loginService: ILoginService) {}

  public async execute(req: any, res: any): Promise<void> {
    try {
      const { email, password } = req.body;

      const user = await this.loginService({ email, password });

      if (user?.password !== password) {
        res.status(400).json({ message: "Invalid password" });
        return;
      }

      const { password: _, ...rest } = user;

      res.status(200).json({ user: rest });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}
