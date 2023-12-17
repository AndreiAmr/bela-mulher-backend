import { UserDatabase } from "../../../../database/User.database";
import { MakeLoginService } from "./makeLoginService.factory";

const userRespository = new UserDatabase();
const loginServiceFactory = new MakeLoginService(userRespository);

const loginService = loginServiceFactory.handle.bind(loginServiceFactory);

export { loginService };
