import { type User } from "@prisma/client";
import { prisma } from "../prisma/prisma";

export interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  nickname: string;
}

interface ICreateUserResponseDTO {
  message: string;
}

export interface IUserDatabase {
  create: (user: ICreateUserDTO) => Promise<ICreateUserResponseDTO>;
  findByEmail: (email: string) => Promise<User | null>;
}

export class UserDatabase implements IUserDatabase {
  private static instance: UserDatabase;

  constructor() {}

  public static getInstance(): UserDatabase {
    if (!UserDatabase.instance) {
      UserDatabase.instance = new UserDatabase();
    }

    return UserDatabase.instance;
  }

  public async create(user: ICreateUserDTO): Promise<ICreateUserResponseDTO> {
    const userCreated = await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
        nickname: user.nickname,
      },
    });

    if (!userCreated) {
      return { message: "User not created" };
    }

    return {
      message: "User created",
    };
  }

  public async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    return user;
  }
}
