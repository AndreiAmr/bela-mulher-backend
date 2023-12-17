import { User } from "@prisma/client";
import { IUserDatabase } from "../../../../database/User.database";
import { LoginDTO } from "../../../../types/login";

export interface ILoginService {
  (data: LoginDTO): Promise<User>;
}

interface IMakeLoginService {
  handle: (data: LoginDTO) => Promise<User>;
}

export class MakeLoginService implements IMakeLoginService {
  constructor(private readonly userRepository: IUserDatabase) {}

  public async handle(data: LoginDTO): Promise<User> {
    const user = await this.userRepository.findByEmail(data.email);

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }
}
