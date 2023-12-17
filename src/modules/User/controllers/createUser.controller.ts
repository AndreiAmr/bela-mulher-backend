import { MakeCreateUserController } from "./makeCreateUserController.factory";
import { createUserService } from "../services/createUser.service";

const createUserControllerFactory = new MakeCreateUserController(
  createUserService
);

const createUserController = createUserControllerFactory.execute.bind(
  createUserControllerFactory
);

export { createUserController };
