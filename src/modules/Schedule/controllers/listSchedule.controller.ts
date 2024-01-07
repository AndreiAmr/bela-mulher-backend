import { MakeListScheduleController } from "@modules/Schedule/controllers/makeListScheduleController.factory";
import { listScheduleService } from "@modules/Schedule/services/listSchedule.service";

const listScheduleControllerFactory = new MakeListScheduleController(
  listScheduleService
);

const listScheduleController = listScheduleControllerFactory.execute.bind(
  listScheduleControllerFactory
);

export { listScheduleController };
