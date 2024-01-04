import 'module-alias/register';
import { ICreateUserService } from '@modules/User/services/CreateUser/makeCreateUserService.factory';

export class MakeCreateUserController {
  constructor(private readonly createUserService: ICreateUserService) {}

  public async execute(req: any, res: any): Promise<void> {
    try {
      const { name, email, password, nickname } = req.body;

      await this.createUserService({ name, email, password, nickname });

      res.status(201).json({ message: 'User created' });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}
