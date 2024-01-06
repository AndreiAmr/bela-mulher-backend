import { IScheduleDatabase } from '@database/Schedule.database';
import { IScheduleData } from 'src/types/schedule';

export interface IListScheduleService {
  (professionalId: string): Promise<IScheduleData[]>;
}

interface IMakeListScheduleService {
  execute(professionalId: string): Promise<IScheduleData[]>;
}

export class MakeListScheduleService implements IMakeListScheduleService {
  constructor(private readonly scheduleDatabase: IScheduleDatabase) {}

  async execute(professionalId: string) {
    const schedules = await this.scheduleDatabase.findManyByUserId(
      professionalId
    );

    return schedules;
  }
}
