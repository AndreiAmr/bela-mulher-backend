import { UserDatabase } from "../../../database/User.database";
import { MakeCreateUserService } from "./makeCreateUserService.factory";

const userRepository = UserDatabase.getInstance();
const createUserFactory = new MakeCreateUserService(userRepository);

const createUserService = createUserFactory.handle.bind(createUserFactory);

export { createUserService };
