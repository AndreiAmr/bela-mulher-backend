import { ScheduleDatabase } from "@database/Schedule.database";
import { MakeListScheduleService } from "@modules/Schedule/services/makeListScheduleService.factory";

const scheduleDatabase = ScheduleDatabase.getInstance();
const listScheduleServiceFactory = new MakeListScheduleService(
  scheduleDatabase
);

const listScheduleService = listScheduleServiceFactory.execute.bind(
  listScheduleServiceFactory
);

export { listScheduleService };
