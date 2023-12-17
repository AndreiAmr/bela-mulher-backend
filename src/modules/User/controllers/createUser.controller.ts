import { MakeCreateUserController } from "./makeCreateUserController.factory";
import { createUserService } from "../services/createUser.service";

const createUserControllerFactory = new MakeCreateUserController(
  createUserService
);

const createUserController = createUserControllerFactory.handle.bind(
  createUserControllerFactory
);

export { createUserController };
