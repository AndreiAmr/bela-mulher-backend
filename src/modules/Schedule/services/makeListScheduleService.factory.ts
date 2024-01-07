import { type IScheduleDatabase } from "@database/Schedule.database";
import { type IScheduleData } from "src/types/schedule";

export interface IListScheduleService {
  (professionalId: string): Promise<IScheduleData[]>;
}

interface IMakeListScheduleService {
  execute(professionalId: string): Promise<IScheduleData[]>;
}

export class MakeListScheduleService implements IMakeListScheduleService {
  constructor(private readonly scheduleDatabase: IScheduleDatabase) {}

  public async execute(professionalId: string): Promise<IScheduleData[]> {
    const schedules =
      await this.scheduleDatabase.findManyByUserId(professionalId);

    return schedules;
  }
}
