import { MakeLoginController } from "./makeLoginController.factory";
import { loginService } from "../services/login.service";

const loginControllerFactory = new MakeLoginController(loginService);

const loginController = loginControllerFactory.execute.bind(
  loginControllerFactory
);

export { loginController };
