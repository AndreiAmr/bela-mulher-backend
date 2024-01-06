import { ICreateUserDTO, IUserDatabase } from '@database/User.database';

export interface ICreateUserService {
  (user: ICreateUserDTO): Promise<void>;
}

interface IMakeCreateUserService {
  handle(user: ICreateUserDTO): Promise<void>;
}

export class MakeCreateUserService implements IMakeCreateUserService {
  constructor(private readonly userDatabase: IUserDatabase) {}

  public async handle(user: ICreateUserDTO): Promise<void> {
    const userExists = await this.userDatabase.findByEmail(user.email);

    if (userExists) {
      throw new Error('User already exists');
    }

    const userCreated = await this.userDatabase.create(user);

    if (userCreated.message === 'User not created') {
      throw new Error('User not created');
    }

    return;
  }
}
